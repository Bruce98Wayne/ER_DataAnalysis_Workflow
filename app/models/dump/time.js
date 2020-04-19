'use strict';
module.exports = (sequelize, DataTypes) => {
  const Time = sequelize.define('Time', {
    timeId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    time: {
        type: DataTypes.TIME,
        allowNull : true
    },
}, {});
  return Time;
};