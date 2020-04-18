'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    cityId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull : true
    },
}, {});
  City.associate = function(models) {
    // associations can be defined here
    models.City.hasMany(models.Users, {foreignKey: 'userId'})
  };
  return City;
};