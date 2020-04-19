'use strict';
module.exports = (sequelize, DataTypes) => {
  const Text = sequelize.define('Text', {
    message: DataTypes.STRING
  }, {});
  Text.associate = function(models) {
    // associations can be defined here
  };
  return Text;
};