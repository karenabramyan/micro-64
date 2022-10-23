const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ User, Item }) {
      // Basket.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });
      // Basket.hasMany(Item, { foreignKey: 'itemId' });
    }
  }
  Basket.init({
    userId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'Users',
      //   key: 'id',
      // },
    },
    itemId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'Items',
      //   key: 'id',
      // },
    },
    orderStatus: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
