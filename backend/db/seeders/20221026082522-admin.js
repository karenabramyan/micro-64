const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        login: 'admin',
        email: 'admin@admin',
        phone: '+79312220000',
        password: await bcrypt.hash('000000000', 10),
        role: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('User');
  },
};
