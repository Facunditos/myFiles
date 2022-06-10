'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      File.belongsTo(models.User,{
        foreignKeyConstraint:false
      })
    }
  };
  File.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'File',
    paranoid:true
  });
  return File;
};