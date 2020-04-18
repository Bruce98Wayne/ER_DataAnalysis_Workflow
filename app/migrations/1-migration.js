'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Cities", deps: []
 * createTable "Dates", deps: []
 * createTable "DateTimes", deps: []
 * createTable "States", deps: []
 * createTable "Texts", deps: []
 * createTable "Times", deps: []
 * createTable "Users", deps: []
 * createTable "dateTime", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "migration",
    "created": "2020-04-18T03:54:49.911Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Cities",
            {
                "cityId": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true
                },
                "name": {
                    "type": Sequelize.STRING,
                    "allowNull" : true
                },
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Dates",
            {
                "dateId": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true
                },
                "date": {
                    "type": Sequelize.DATEONLY,
                    "allowNull" : true
                },
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "DateTimes",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true
                  }

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "States",
            {
                "stateId": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true
                },
                "name": {
                    "type": Sequelize.STRING,
                    "allowNull" : true
                },
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Texts",
            {
                "textId": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true
                },
                "text": {
                  "type": Sequelize.STRING,
                  "allowNull" : false
              },
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Times",
            {    
            "timeId": {
                "type": Sequelize.INTEGER,
                "autoIncrement": true,
                "primaryKey": true
            },
            "time": {
                "type": Sequelize.TIME,
                "allowNull" : true
            },

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {
                "userId": {
                    "type": Sequelize.INTEGER,
                    "allowNull" : false,
                    "primaryKey": true
                },
                "name": {
                  "type": Sequelize.STRING,
                  "allowNull" : true
              },
            },
            {}
        ]
    },
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
