const db = require('../database/conn');
const { DataTypes } = require('sequelize');

const { generateHash } = require('../utils/hashProvider');

const User = db.define('User', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }

});

User.beforeCreate( async (user) => {
  const hashedPassword = await generateHash(user.password);
  user.password = hashedPassword;
});

module.exports = User;