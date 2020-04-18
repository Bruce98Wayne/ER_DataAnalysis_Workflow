'use strict';
module.exports = (sequelize, DataTypes) => {
  const Time = sequelize.define('Time', {
    timeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'Time',
        key: 'timeId'
      }
    },
    dateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'Date',
        key: 'dateId'
      }
    },
}, {});
  return Time;
};