const User = require('../model/users');

// Listar usuários
const list = (req, res) => {
  res.send("Listagem de usuários");
}

// Busca um usuário pelo id
const getById = (req, res) => {
  res.send("busca um usuário por id");
}

// Criar um usuário pelo id
const create = (req, res) => {
  res.send("criar um usuário");
}

// Alterar um usuário pelo id
const update = (req, res) => {
  res.send("Alterar um usuário");
}

// Remover um usuário
const remove = (req, res) => {
  res.send("Remover um usuário");
}

module.exports = {
  list,
  getById,
  create,
  update,
  remove
}
