'use strict';
module.exports = (sequelize, DataTypes) => {
  const Text = sequelize.define('Text', {
    textId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull : false
  },
}, {});
Text.associate = function(models) {
    // associations can be defined here
    models.Text.has(models.DateTime, {foreignKey: 'dateTimeId'})
  };
  return Text;
};