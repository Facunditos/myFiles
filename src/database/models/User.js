'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.File)
    }
  };
  User.init({
    first_name: {
      type:DataTypes.STRING(100),
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    last_name: {
      type:DataTypes.STRING(100),
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    email: {
      type:DataTypes.STRING(100),
      allowNull:false,
      unique:true,
      validate:{
        notEmpty:true
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    resetToken: {
      type:DataTypes.TEXT,
    },
    deletedAt:{
      type:DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'User',
    paranoid:true,
  });
  return User;
};