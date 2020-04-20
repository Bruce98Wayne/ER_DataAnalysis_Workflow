const sequlize = require('sequelize')
const model = require('./models')
const d3 = require('d3')

function load() {
 d3.csv('../csv/userMessage.csv').then((data)=> {
     console.log("inside scv func")
     console.log(data)
 })   
} 

module.exports = load