const User = require('../model/users');

const jwt = require('jsonwebtoken');

// Listar usuários
const list = (req, res) => {
  res.send("Listagem de usuários");
}

// Busca um usuário pelo id
const getById = (req, res) => {
  res.send("busca um usuário por id");
}

// Criar um usuário
const create = async (req, res) => {
  const { name, email, password } = req.body;

  try {

    const user = await User.create({name, email, password});
    return res.status(201).json(user);

  } catch (error) {
    return res.status(400).json({
      error: '@users/create',
      message: error.message || 'Erro ao criar usuário!',
    });

  }
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
