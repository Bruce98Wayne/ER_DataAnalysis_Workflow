'use strict';
module.exports = (sequelize, DataTypes) => {
  const DateTime = sequelize.define('DateTime', {
    timeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'Time',
        key: 'timeId'
      }
    },
    dateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'Date',
        key: 'dateId'
      }
    },
}, {});
  return DateTime;
};