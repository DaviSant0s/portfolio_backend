const User = require('../model/users');

const login = (req, res) => {
  res.send("Sucesso ao fazer o login!");
}

module.exports = {
  login,
};