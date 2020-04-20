'use strict';

module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  City.associate = function(models) {
    // associations can be defined here
    City.belongsTo(models.State)
  };
  City.beta = true;
  return City;
};