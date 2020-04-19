'use strict';
module.exports = (sequelize, DataTypes) => {
  const Date = sequelize.define('Date', {
    dateId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull : true
    },
}, {});
  return Date;
};