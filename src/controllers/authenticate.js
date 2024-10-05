const User = require('../model/users');

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../configs/env');

const login = async (req, res) => {
  
  const { email, password} = req.body;

  const loginErrorMessage = {
    error: "@authenticate/login",
    message: "Email ou senha inválido!"
  };

  try {
    const user = await User.findOne({raw: true, where: {email: email}});
    const id = user.id;

    if (!user) throw new Error("Usuário não encontrado!");

    if (!(user.password === password)) throw new Error();

    const token = jwt.sign({ id }, JWT_SECRET, {
      expiresIn: 300 // 5min
    });

    return res.status(200).json({...user, token: token});

  } catch (error) {
    return res.status(400).json(loginErrorMessage);
  }

}

module.exports = {
  login,
};
