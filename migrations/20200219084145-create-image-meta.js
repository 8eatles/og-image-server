'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ImageMeta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(64),
        allowNull: false,
        defaultValue: 'image.hotcho.co',
      },
      description: {
        type: Sequelize.STRING(128),
        allowNull: false,
        defaultValue: 'image.hotcho.co',
      },
      encoding: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      mimetype: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING(64),
        allowNull: false,
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
    return queryInterface.dropTable('ImageMeta');
  }
};