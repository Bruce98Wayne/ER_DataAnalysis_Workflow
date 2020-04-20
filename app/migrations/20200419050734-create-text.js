'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Texts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.STRING
      },
      UserId:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of Source model
          key: 'id',
        }
      },
      DateTimeId: {
        type: Sequelize.INTEGER,
        references: {         // User hasMany WorkingDays n:n
          model: 'DateTimes',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Texts');
  }
};