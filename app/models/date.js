'use strict';

module.exports = (sequelize, DataTypes) => {
  const Date = sequelize.define('Date', {
    
    date: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Date.associate = function(models) {
    // associations can be defined here
    Date.belongsToMany(models.Time, { through: 'DateTime' });

  };
  Date.beta = true;

  return Date;
};