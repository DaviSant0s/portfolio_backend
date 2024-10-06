const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../configs/env');

const verifyAuthentication = (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization) return res.status(401).json({
    error: "@authenticate/missing-token",
    message: "Token not sent"
  });

  const invalidTokenMessage = {
    error: '@authenticate/invalid-token',
    message: 'Token provided is invalid',
  }

  const token = authorization.split(' ')[1];

  if(!token) return res.status(401).json(invalidTokenMessage);

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if(err) return res.status(401).json(invalidTokenMessage);

    req.id = decoded.id;

    return next();
  });

}

module.exports = {
  verifyAuthentication,
}