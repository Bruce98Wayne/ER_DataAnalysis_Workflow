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

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Dates",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "DateTimes",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "States",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Texts",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Times",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "dateTime",
            {

            },
            {}
        ]
    }
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
