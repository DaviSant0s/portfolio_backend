const express = require('express');
const app = express();

app.use(express.json());

// routes
const tasksRoutes = require("./routes/tasks");
const usersRoutes = require("./routes/users");
const authenticateRoutes = require("./routes/authenticate");

// conxão com o banco de dados
const conn = require('./database/conn');

const { port } = require('./configs/env');

const PORT = port || 3000;

app.use('/authenticate', authenticateRoutes);
app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);

conn.sync({ force: true })
.then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });

})
.catch(err => {
  console.log(err);
});

