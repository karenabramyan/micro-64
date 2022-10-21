const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Item }) {
      Like.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });
      // Like.belongsTo(Item, { foreignKey: 'itemId', onDelete: 'cascade' });
    }
  }
  Like.init(
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
          model: 'Users',
        },
      },
      itemId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Items',
        },
      },
    },
    {
      sequelize,
      modelName: 'Like',
    }
  );
  return Like;
};
