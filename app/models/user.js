'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    name: {
      type: DataTypes.STRING,
      allowNull : false
  },
}, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Text, {foreignKey: 'textId'})
  };
  return User;
};