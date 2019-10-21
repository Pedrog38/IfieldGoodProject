var express = require('express');
var app = express();
const Sequelize = require('sequelize');
var routes = require('./routes');
app.use(routes);
app.use(express.json());

const sequelize = new Sequelize('agriparc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
})
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});
app.listen(3000);