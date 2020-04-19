'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull : false,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull : true
  },
}, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Text, {foreignKey: 'textId'})
  };
  return User;
};