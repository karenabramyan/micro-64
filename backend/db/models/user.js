const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Like, Order, Basket }) {
      // User.hasMany(Item, { foreignKey: 'userId', onDelete: 'cascade' });
      // User.hasMany(Like, { foreignKey: 'userId', onDelete: 'cascade' });
      // User.hasMany(Order, { foreignKey: 'userId', onDelete: 'cascade' });
      // User.hasMany(Basket, { foreignKey: 'userId', onDelete: 'cascade' })
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    login: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    phone: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    role: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
