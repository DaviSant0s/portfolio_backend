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

  const errorCreatingUserMessage = (message) => {
    return {
      error: "@users/create",
      message: message
    };
  }

  if(!name) return res.status(400).json(errorCreatingUserMessage("Name is required"));
  if(!email) return res.status(400).json(errorCreatingUserMessage("Email is required"));
  if(!password) return res.status(400).json(errorCreatingUserMessage("Password is required"));

  try {

    const user = await User.create({name, email, password});

    if(!user) throw new Error();

    return res.status(201).json(user);

  } catch (error) {
    return res.status(400).json({
      error: '@users/create',
      message: error.message || 'Failed to create user',
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
