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
const create = async (req, res) => {
  const { UserId, title, status } = req.body;

  try {

    const task = await Task.create(UserId, title, status);
    return res.status(201).json(task);

  } catch (error) {
    return res.status(400).json({
      error: '@tasks/create',
      message: error.message || 'Erro ao criar a tarefa!',
    });
  }

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
