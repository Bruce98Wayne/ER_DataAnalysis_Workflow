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

function load(){
  //Creating states
  const statesArr = []
  fs.createReadStream('../csv/state.csv')
  .pipe(csv())
  .on('data', async (row) => {

    const stateMap = {}
    const stateName = row.state
    const [ state, created] =  await models.State.findOrCreate({
      where:{name: stateName},
      logging: false
    });
    stateMap[stateName] = state.ids
    console.log(`Created Id: ${state.id}, State: ${stateName}.....`);

  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });


  return statesArr
}
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

