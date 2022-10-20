const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate({ User, Like, Order, Basket }) {
      Item.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });
      Item.belongsTo(Basket, { foreignKey: 'basketId', onDelete: 'cascade' });
      Item.hasMany(Like, { foreignKey: 'likeId', onDelete: 'cascade' });
      Item.hasMany(Order, { foreignKey: 'orderId', onDelete: 'cascade' });
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
    type: {
      type: DataTypes.TEXT,
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
    range: {
      type: DataTypes.INTEGER,
      img: {
        type: DataTypes.TEXT,
      },
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    basketId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Basket',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
