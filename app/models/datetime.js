'use strict';
module.exports = (sequelize, DataTypes) => {
  const DateTime = sequelize.define('DateTime', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
}, {});
DateTime.associate = function(models) {
  // associations can be defined here
Date.belongsToMany(Time, { through: DateTime });
Time.belongsToMany(Date, { through: DateTime });
};
  return DateTime;
};