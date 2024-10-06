const Task = require('../model/tasks');

// Listar tasks
const list = (req, res) => {
  res.send("Listagem de tasks");
}

// Busca uma task pelo id
const getById = (req, res) => {
  res.send("busca task por id");
}

// Criar uma taks pelo
const create = async (req, res) => {
  const { title, status} = req.body;
  const UserId = req.id;

  const errorCreatingTaskMessage = (message) => {
    return {
      error: "@tasks/create",
      message: message
    };
  }

  if(!title) return res.status(400).json(errorCreatingTaskMessage('Title is required'));
  if(!status) return res.status(400).json(errorCreatingTaskMessage('Status is required'));

  try {

    const task = await Task.create({title, status, UserId});

    if(!task) throw new Error();

    return res.status(201).json(task);

  } catch (error) {
    return res.status(400).json({
      error: '@tasks/create',
      message: error.message || 'Task creation failed',
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
