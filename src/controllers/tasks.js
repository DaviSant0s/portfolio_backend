const Task = require('../model/tasks');

// Listar tasks
const list = (req, res) => {
  res.send("Listagem de tasks");
}

// Busca uma task pelo id
const getById = (req, res) => {
  res.send("busca task por id");
}

// Criar uma taks pelo id
const create = (req, res) => {
  res.send("criar uma task");
}

// Alterar uma task pelo id
const update = (req, res) => {
  res.send("Alterar uma task");
}

// Remover uma task
const remove = (req, res) => {
  res.send("Remover uma task");
}

module.exports = {
  list,
  getById,
  create,
  update,
  remove
}
