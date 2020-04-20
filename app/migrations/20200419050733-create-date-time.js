'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DateTimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TimeId: {
        type: Sequelize.INTEGER,
        references: {         // User hasMany WorkingDays n:n
          model: 'Times',
          key: 'id'
        }
      },
      DateId: {
        type: Sequelize.INTEGER,
        references: {         // User hasMany WorkingDays n:n
          model: 'Dates',
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
    return queryInterface.dropTable('DateTimes');
  }
};