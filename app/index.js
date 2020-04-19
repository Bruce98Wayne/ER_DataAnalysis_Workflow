const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const http = require('http')
const Sequelize = require('sequelize')

const app = express();

const db = new Sequelize("message_app", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    define: { timestamps: false },
    logging: false
}) 


app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => {
    db.authenticate().then((response)=> console.log(response))
    res.status(200).send({
        message: "Connection created!"
    })
});
const port = parseInt(process.env.PORT, 10) || 8000;

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;