const { Sequelize } = require('sequelize');
const { database, options, password, username  } = require('../configs/env');

const sequelize = new Sequelize(database, username, password, {
  host: options.host,
  dialect: options.dialect
} );

try {

  sequelize.authenticate();
  console.log('Conectamos com sucesso ao sequelize');

} catch (error) {
  console.log('Não foi possível conectar: ', error);
}

module.exports = sequelize;

