const { Router } = require('express');
const routes = Router();

const tasksController = require('../controllers/tasks');

// listagem 
routes.get("/", tasksController.list);

// criação
routes.post("/", tasksController.create);

// listar uma certificação específica
routes.get("/:id", tasksController.getById);

// edição
routes.put("/:id", tasksController.update);

// delete 
routes.delete("/:id", tasksController.remove);

module.exports = routes;