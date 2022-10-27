module.exports = {
  async up(queryInterface) {
    const likes = [
      {
        userId: 1,
        itemId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        itemId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        itemId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Likes', likes);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Like');
  },
};
