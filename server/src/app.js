require('dotenv').config(); // se va ejecutar cuando haya variables dentro de .env
const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes/index');

const server = express();

server.use(express.json());  //la inf que nos llega en formato json lo pasa a JS
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use("/rickandmorty", mainRouter);

module.exports = server;