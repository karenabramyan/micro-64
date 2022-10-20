const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Item }) {
      Order.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });
      Order.hasMany(Item, { foreignKey: 'itemId', onDelete: 'cascade' });
    }
  }
  Order.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
        },
      },
      itemId: {
        type: DataTypes.INTEGER,
        references: { model: 'Items' },
      },
      days: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
