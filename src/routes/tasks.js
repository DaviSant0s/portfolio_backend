const { Router } = require('express');
const routes = Router();

const tasksController = require('../controllers/tasks');
const { verifyAuthentication } = require('../middlewares/verifyAuthentication');

// listagem 
routes.get("/", verifyAuthentication, tasksController.list);

// criação
routes.post("/", verifyAuthentication, tasksController.create);

// listar uma certificação específica
routes.get("/:id", verifyAuthentication, tasksController.getById);

// edição
routes.put("/:id", verifyAuthentication, tasksController.update);

// delete 
routes.delete("/:id", verifyAuthentication, tasksController.remove);

module.exports = routes;