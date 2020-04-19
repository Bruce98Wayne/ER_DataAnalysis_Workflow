'use strict';
module.exports = (sequelize, DataTypes) => {
  const Time = sequelize.define('Time', {
    time: DataTypes.TIME
  }, {});
  Time.associate = function(models) {
    // associations can be defined here
    Time.belongsToMany(models.Date, { through: 'DateTime' });
  };
  return Time;
};