// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sequelize = require('sequelize');

module.exports = {
  /**
   * Run the migration
   *
   * @param {Sequelize.QueryInterface} queryInterface
   * @param {Sequelize.DataTypes} types
   */
  up: async (queryInterface, types) => queryInterface.createTable('UserActivations', {
    userId: {
      allowNull: false,
      primaryKey: true,
      type: types.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    token: {
      allowNull: false,
      type: types.CHAR(21),
    },
  }),

  /**
   * Undo the migration
   *
   * @param {Sequelize.QueryInterface} queryInterface
   */
  down: async (queryInterface) => queryInterface.dropTable('UserActivations'),
};
