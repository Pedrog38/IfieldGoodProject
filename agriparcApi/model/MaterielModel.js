const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const gaec = require('./GaecModel');

class Materiel extends Model {};

Materiel.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    marque: {
        type: Sequelize.STRING,
        allowNull: false
    },
    modele: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    categorie: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gaec_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'materiel'
});

Materiel.belongsTo(gaec);