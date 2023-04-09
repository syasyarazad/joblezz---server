'use strict';

const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.History, { foreignKey: 'userID' })
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: 'Email must be unique'},
      validate: {
        notNull: {msg: 'Email is required'},
        notEmpty: {msg: 'Email is required'},
        isEmail: {msg: 'Invalid email format'},
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isPremium: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    applied: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: 'https://svelte.id/h8/p2/img/avatar.png'
    },
    pendidikan: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  // HOOKS BEFORECREATE
  User.beforeCreate((user) => {
    user.password = hashPassword(user.password)
  })

  return User;
};