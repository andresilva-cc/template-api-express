// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sequelize = require('sequelize');

module.exports = {
  /**
   * Run the migration
   *
   * @param {Sequelize.QueryInterface} queryInterface
   * @param {Sequelize.DataTypes} types
   */
  up: async (queryInterface, types) => queryInterface.addColumn('Users', 'active', {
    allowNull: false,
    type: types.BOOLEAN,
    defaultValue: false,
  }),

  /**
   * Undo the migration
   *
   * @param {Sequelize.QueryInterface} queryInterface
   */
  down: async (queryInterface) => queryInterface.removeColumn('Users', 'active'),
};
