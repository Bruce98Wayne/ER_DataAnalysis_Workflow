'use strict';

module.exports = (sequelize, DataTypes) => {
  const Text = sequelize.define('Text', {

    message: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Text.associate = function(models) {
    // associations can be defined here
    Text.belongsTo(models.User)
    Text.belongsTo(models.DateTime)
  };
  Text.beta = true;
  
  return Text;
};