'use strict';
module.exports = (sequelize, DataTypes) => {
  const Text = sequelize.define('Text', {
    message: DataTypes.STRING
  }, {});
  Text.associate = function(models) {
    // associations can be defined here
    Text.belongsTo(models.User)
    Text.belongsTo(models.DateTime)
  };
  return Text;
};