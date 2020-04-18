'use strict';
module.exports = (sequelize, DataTypes) => {
  const Time = sequelize.define('Time', {
    timeId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    time: {
        type: DataTypes.DATEONLY,
        allowNull : true
    },
}, {});
  Time.associate = function(models) {
    // associations can be defined here
    models.Time.belongsToMany(models.Time, {
        through: 'dateTime',
        as: 'Date'
        foreignKey: 'timeId'})
  };
  return Time;
};