/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Note_Labels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      label_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Labels',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
      },
      note_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Notes',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Note_Labels');
  },
};
