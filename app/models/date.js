'use strict';
module.exports = (sequelize, DataTypes) => {
  const Date = sequelize.define('Date', {
    date: DataTypes.DATEONLY
  }, {});
  Date.associate = function(models) {
    // associations can be defined here
    Date.belongsToMany(models.Time, { through: 'DateTime' });

  };
  return Date;
};