const User = require('../model/users');

const jwt = require('jsonwebtoken');
const validator = require('validator');

const { JWT_SECRET } = require('../configs/env');
const { compareHash } = require('../utils/hashProvider');

const login = async (req, res) => {

  const { email, password} = req.body;

  const loginErrorMessage = (message) => {
    return {
      error: "@authenticate/login",
      message: message
    };
  }

  if(!email) return res.status(400).json(loginErrorMessage("Email is required"));
  if(!password) return res.status(400).json(loginErrorMessage("Password is required"));

  // validação do email
  const isEmail = validator.isEmail(email);
  if(!isEmail) return res.status(400).json(loginErrorMessage("Invalid email format"));

  try {
    const user = await User.findOne({raw: true, where: {email: email}});
    
    if (!user) throw new Error();

    const isValidPassword = await compareHash(password, user.password);

    if(!isValidPassword) throw new Error();
    
    const id = user.id;
  
    const token = jwt.sign({ id }, JWT_SECRET, {
      expiresIn: 1000
    });

    return res.status(200).json({...user, token});

  } catch (error) {
    return res.status(400).json({
      error: "@authenticate/login",
      message: error.message || "Authentication failed"
    });
  }
}

module.exports = {
  login,
};
