'use strict';

module.exports = (sequelize, DataTypes) => {
  const DateTime = sequelize.define('DateTime', {

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  DateTime.associate = function(models) {
    // associations can be defined here
  };
  DateTime.beta = true;
  return DateTime;
};