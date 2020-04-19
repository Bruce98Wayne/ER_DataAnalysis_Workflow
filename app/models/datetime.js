'use strict';
module.exports = (sequelize, DataTypes) => {
  const DateTime = sequelize.define('DateTime', {
    dateTimeId: DataTypes.INTEGER
  }, {});
  DateTime.associate = function(models) {
    // associations can be defined here
  };
  return DateTime;
};