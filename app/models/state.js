'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    stateId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull : true
    },
}, {});
  State.associate = function(models) {
    // associations can be defined here
    models.State.hasMany(models.City, {foreignKey: 'cityId'})
  };
  return State;
};