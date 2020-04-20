const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const http = require('http')
const app = express();
const Sequelize = require('sequelize')
const sequelize = require('./db')
const models = require('./models')
const csv = require('csv-parser');
const fs = require('fs');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => {
    res.status(200).send({
        message: "Get"
    })
});

app.post('/csv', (req, res) => {
    console.log("Post request");
    res.status(200).send({
        message: "Post"
    })
});
const statesArr = []
fs.createReadStream('../csv/state.csv')
  .pipe(csv())
  .on('data', (row) => {
    statesArr.push({name : row.state})
  })
  .on('end', async () => {
    await sequelize.sync().then(models.State.bulkCreate(statesArr))
    console.log('CSV file successfully processed');
  });


const port = parseInt(process.env.PORT, 10) || 8000;

app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;

