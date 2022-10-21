const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ User, Item }) {
      Basket.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });
      Basket.hasMany(Item, { foreignKey: 'basketId', onDelete: 'cascade' });
    }
  }
  Basket.init(
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
          key: 'id',
        },
      },
      itemId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Item',
          key: 'id',
        },
      orderStatus: {
        type: DataTypes.BOOLEAN,
      },
    }
  },
    {
      sequelize,
      modelName: 'Basket',
    },
  );
  return Basket;
};
