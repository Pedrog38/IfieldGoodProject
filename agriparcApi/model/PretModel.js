const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const materiel = require('./MaterielModel');
const agriculteur = require('./AgriculteurModel');

class Pret extends Model { };

Pret.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    date_debut: {
        type: Sequelize.DATE,
        allowNull: false
    },
    date_fin: {
        type: Sequelize.DATE,
        allowNull: false
    },
    agriculteur_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    materiel_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: 'pret'
});

Pret.hasOne(materiel);
Pret.hasOne(agriculteur);
