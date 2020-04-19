const Sequelize = require('sequelize')

const db = new Sequelize("meesage_app", "root", "", {
        host: "localhost",
        port: 3306,
        dialect: "mysql",
        define: { timestamps: false },
        logging: false
    }) 

module.exports = db;