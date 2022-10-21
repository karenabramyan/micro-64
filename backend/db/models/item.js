const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate({ User, Like, Order, Basket }) {
      // Item.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });
      // Item.belongsTo(Basket, { foreignKey: 'itemId', onDelete: 'cascade' });
      // Item.hasMany(Like, { foreignKey: 'itemId', onDelete: 'cascade' });
      // Item.hasMany(Order, { foreignKey: 'itemId', onDelete: 'cascade' });
    }
  }
  Item.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.TEXT,
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
    range: {
      type: DataTypes.INTEGER,
    },
    img: {
      type: DataTypes.TEXT,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
