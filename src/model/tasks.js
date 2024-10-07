const db = require('../database/conn');
const { DataTypes } = require('sequelize');
const User = require('./users');

const Task = db.define('Task', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  status: {
    type: DataTypes.ENUM('pendente', 'em andamento', 'concluida'),
    allowNull: false
  },

});

User.hasMany(Task, { onDelete: 'cascade' });
Task.belongsTo(User);

module.exports = Task;

