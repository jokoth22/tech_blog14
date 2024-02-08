const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      comment: {
          type: DataTypes.STRING,
          allowNull: false
      },
      postId: {
          type: DataTypes.INTEGER,
          references: {
              model: "post",
              key: "id"
          }
      },
      userId: {
          type: DataTypes.INTEGER,
          references: {
              model: "user",
              key: "id"
          }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'Comment',
    }
  );
  
  module.exports = Comment;