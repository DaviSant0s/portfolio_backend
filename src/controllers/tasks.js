const Task = require('../model/tasks');

// Listar tasks
const list = async (req, res) => {

  try {
    const tasks = await Task.findAll();

    return res.status(200).json(tasks)

  } catch (error) {
    return res.status(400).json({
      error: '@tasks/list',
      message: error.message || 'Failed to list tasks',
    });

  }
}

// Busca uma task pelo id
const getById = async (req, res) => {
  const { id } = req.params;

  try {

    const task = await Task.findOne({ where: { id } });

    if(!task) throw new Error();

    return res.status(200).json(task)

  } catch (error) {
    return res.status(400).json({
      error: '@tasks/getById',
      message: error.message || 'Task not found',
    });

  }
}

// Criar uma taks
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
const update = async (req, res) => {
  const { title, status} = req.body;
  const { id } = req.params;

  const errorUpdatingTaskMessage = (message) => {
    return {
      error: "@tasks/update",
      message: message
    };
  }

  if(!title) return res.status(400).json(errorUpdatingTaskMessage('Title is required'));
  if(!status) return res.status(400).json(errorUpdatingTaskMessage('Status is required'));

  try {

    const taskUpdated = await Task.update({ title, status }, { where: { id }, individualHooks: true } );

    if(taskUpdated[0] === 0) throw new Error();

    return res.status(200).json({message: "Task updated successfully"});

  } catch (error) {
    return res.status(400).json({
      error: '@tasks/update',
      message: error.message || 'failed to change task',
    });

  }

}

// Remover uma task
const remove = async (req, res) => {
  const { id } = req.params;

  try {

    const taskRemoved = await Task.destroy({
      where: { id }
    });

    if(taskRemoved === 0) throw new Error();

    return res.status(200).json({message: "Task deleted successfully"})

  } catch (error) {
    return res.status(400).json({
      error: '@tasks/remove',
      message: error.message || 'Failed to delete task',
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
