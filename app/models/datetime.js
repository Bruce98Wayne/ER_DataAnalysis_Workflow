'use strict';
module.exports = (sequelize, DataTypes) => {
  const DateTime = sequelize.define('DateTime', {
  }, {});
  DateTime.associate = function(models) {
    // associations can be defined here
    DateTime.belongsTo(models.Text)
  };
  return DateTime;
};