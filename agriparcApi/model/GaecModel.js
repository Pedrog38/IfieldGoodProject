var express = require('express');
var app = express();
const Sequelize = require('sequelize');

const Model = Sequelize.Model;

const sequelize = new Sequelize('agriparc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
class Gaec extends Model {};

Gaec.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: false
    },
    adresse: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mail: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: 'gaec'
});

module.exports = Gaec;