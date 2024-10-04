const db = require('../database/conn');
const { DataTypes } = require('sequelize');

const User = db.define('User', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },

  password: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  }

});




module.exports = User;

