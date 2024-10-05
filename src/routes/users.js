const { Router } = require('express');
const routes = Router();

const usersController = require('../controllers/users');
const { verifyAuthentication } = require('../middlewares/verifyAuthentication');

// listagem 
routes.get("/", usersController.list);

// criação
routes.post("/", usersController.create);

// listar uma certificação específica
routes.get("/:id", usersController.getById);

// edição
routes.put("/:id", verifyAuthentication, usersController.update);

// delete 
routes.delete("/:id", verifyAuthentication, usersController.remove);

module.exports = routes;
