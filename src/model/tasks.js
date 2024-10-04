const db = require('../database/conn');
const { DataTypes } = require('sequelize');

const Task = db.define('Task', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  status: {
    type: DataTypes.ENUM('pendente', 'em andamento', 'concluida'),
    allowNull: true
  },

});


module.exports = Task;

