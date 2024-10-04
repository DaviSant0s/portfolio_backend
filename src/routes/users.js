const { Router } = require('express');
const routes = Router();

const usersController = require('../controllers/users');

// listagem 
routes.get("/", usersController.list);

// criação
routes.post("/", usersController.create);

// listar uma certificação específica
routes.get("/:id", usersController.getById);

// edição
routes.put("/:id", usersController.update);

// delete 
routes.delete("/:id", usersController.remove);

module.exports = routes;