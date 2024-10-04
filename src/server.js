const express = require('express');
const app = express();

app.use(express.json());

// routes
const tasksRoutes = require("./routes/tasks");

const conn = require('./database/conn');

const { port } = require('./configs/env');

const PORT = port || 3000;

app.use('/tasks', tasksRoutes);


conn.sync()
.then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });

})
.catch(err => {
  console.log(err);
});

