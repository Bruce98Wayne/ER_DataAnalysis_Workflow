'use strict';
module.exports = (sequelize, DataTypes) => {
  const Date = sequelize.define('Date', {
    dateId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull : true
    },
}, {});
  Date.associate = function(models) {
    // associations can be defined here
    models.Date.belongsToMany(models.Time, {
        through: 'dateTime',
        as: 'Time'
        foreignKey: 'dateId'})
  };
  return Date;
};