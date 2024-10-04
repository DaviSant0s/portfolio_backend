const { Router } = require('express');
const routes = Router();

const authenticteController = require('../controllers/authenticate');

// login
routes.post("/", authenticteController.login);

module.exports = routes;