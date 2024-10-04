const Task = require('../model/tasks');

// Listar certificações
const list = (req, res) => {
  res.send("Listagem");
}

// Busca uma certificação pelo id
const getById = (req, res) => {
  res.send("busca por id");
}

// Criar uma certificação pelo id
const create = (req, res) => {
  res.send("criar uma certificação");
}

// Alterar uma certificação pelo id
const update = (req, res) => {
  res.send("Alterar uma certificação");
}

// Remover uma certificação
const remove = (req, res) => {
  res.send("Remover uma certificação");
}

module.exports = {
  list,
  getById,
  create,
  update,
  remove
}
