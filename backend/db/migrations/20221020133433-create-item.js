/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
      },
      category: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      type: {
        type: Sequelize.TEXT,
      },
      capacity: {
        type: Sequelize.INTEGER,
      },
      range: {
        type: Sequelize.INTEGER,
      },
      img: {
        type: Sequelize.TEXT,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      // userId: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Users',
      //     key: 'id',
      //   },
      //   onDelete: 'cascade',
      // },
      // basketId: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Baskets',
      //     key: 'id',
      //   },
      //   onDelete: 'cascade',
      // },
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
    await queryInterface.dropTable('Items');
  },
};
