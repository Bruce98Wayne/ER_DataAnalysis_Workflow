const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const http = require('http')
const app = express();
const Sequelize = require('sequelize')
const models = require('./models')
const csv = require('csv-parser');
const fs = require('fs');
var path = require('path');
const { QueryTypes } = require('sequelize');
const sequelize = require('./db')

app.use(logger('dev'));

app.use('/graph', express.static(path.join(__dirname, '/visualization')))
app.use('/', express.static(path.join(__dirname, '/webInterface')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('html', require('ejs').renderFile);
// Setup a default catch-all route that sends back a welcome message in JSON format.


app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/webInterface'));
});

app.get('/graph', async (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/visualization'));
  await sequelize.query(query, { type: QueryTypes.SELECT, logging: false }).then((data) => {
    res.render(path.join(__dirname + '/visualization'),data, (err, html)=>{
      res.send(data)
    })
  })
}); 

app.get('/query/', (req, res) => {
  // res.status(200).sendFile(path.join(__dirname + '/webInterface/index.html'));

  const query = req.query.q;
  console.log("Query is: ", query)
  sequelize.query(query, { type: QueryTypes.SELECT, logging: false }).then((data) => {
  // console.log("Query is: ", req.query.q)
  console.log("Result is: ")
  console.log(data)
  // res.status(200).sendFile(path.join(__dirname + '/webInterface/index.html'));
    res.render(path.join(__dirname + '/webInterface/index.html'),data, (err, html)=>{
      res.send(data)
    })
  })
});

app.post('/csv', (req, res) => {
    console.log("Post request");
    res.status(200).send({
        message: load()
    })
});

const port = parseInt(process.env.PORT, 10) || 8000;

app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;

