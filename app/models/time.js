'use strict';

module.exports = (sequelize, DataTypes) => {
  const Time = sequelize.define('Time', {
  time: DataTypes.TIME,
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
  }, {});
  Time.associate = function(models) {
    // associations can be defined here
    Time.belongsToMany(models.Date, { through: 'DateTime' });
  };
  Time.beta = true;
  return Time;
};