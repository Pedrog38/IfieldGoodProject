const Sequelize = require('sequelize');

const Model = Sequelize.Model;

const gaec = require('./GaecModel');

class Agriculteur extends Model { };

Agriculteur.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nom: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    prenom: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gaec_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'agriculteur'
});

Agriculteur.belongsTo(gaec);