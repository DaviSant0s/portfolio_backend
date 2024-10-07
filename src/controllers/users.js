const User = require('../model/users');

const validator = require('validator');


// Listar usuários
const list = async (req, res) => {

  try {
    const users = await User.findAll({
      attributes: { exclude: [ 'password' ]}
    });

    return res.status(200).json(users)

  } catch (error) {
    return res.status(400).json({
      error: '@users/list',
      message: error.message || 'Failed to list users',
    });
  }
}

// Busca um usuário pelo id
const getById = async (req, res) => {
  const { id } = req.params;

  try {

    const user = await User.findOne({
      attributes: { exclude: [ 'password' ]},
      where: { id }
    });

    if(!user) throw new Error();

    return res.status(200).json(user)

  } catch (error) {
    return res.status(400).json({
      error: '@users/getById',
      message: error.message || 'User not found',
    });

  }

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

  // validação do email
  const isEmail = validator.isEmail(email);
  if(!isEmail) return res.status(400).json(errorCreatingUserMessage("Invalid email format"));

  // validação do nome
  if(name.length < 2) return res.status(400).json(errorCreatingUserMessage("The name provided is too short"));
  if(name.length > 100) return res.status(400).json(errorCreatingUserMessage("The name provided is too long"));

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
const update = async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;

  const errorCreatingUserMessage = (message) => {
    return {
      error: "@users/update",
      message: message
    };
  }

  if(!name) return res.status(400).json(errorCreatingUserMessage("Name is required"));
  if(!email) return res.status(400).json(errorCreatingUserMessage("Email is required"));
  if(!password) return res.status(400).json(errorCreatingUserMessage("Password is required"));

  // validação do email
  const isEmail = validator.isEmail(email);
  if(!isEmail) return res.status(400).json(errorCreatingUserMessage("Invalid email format"));

  // validação do nome
  if(name.length < 2) return res.status(400).json(errorCreatingUserMessage("The name provided is too short"));
  if(name.lengtt > 100) return res.status(400).json(errorCreatingUserMessage("The name provided is too long"));

  try {

    const userUpdated = await User.update({ name, email, password }, { where: { id }, individualHooks: true } );

    if(userUpdated[0] === 0) throw new Error();

    return res.status(200).json({message: "User updated successfully"});

  } catch (error) {
    return res.status(400).json({
      error: '@users/update',
      message: error.message || 'failed to change user',
    });

  }
}

// Remover um usuário
const remove = async (req, res) => {
  const { id } = req.params;

  try {

    const userRemoved = await User.destroy({
      where: { id }
    });

    if(userRemoved === 0) throw new Error();

    return res.status(200).json({message: "User deleted successfully"});

  } catch (error) {
    return res.status(400).json({
      error: '@users/remove',
      message: error.message || 'Failed to delete user',
    });

  }

}

module.exports = {
  list,
  getById,
  create,
  update,
  remove
}
