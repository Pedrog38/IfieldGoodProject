var express = require('express');
var app = express();
var router = express.Router();
var cors = require('cors');

var Gaec = require('./model/GaecModel');
app.use(Gaec);

var Materiel = require('./model/MaterielModel');
app.use(Materiel);


router.use(cors());
router.use(express.json());
module.exports = router;

//  pour GAEC model

router.get('/gaec', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    Gaec.findAll().then(gaec => {
        res.json(gaec);    
    })
});

router.post('/gaec', function (req, res) {
    
    Gaec.create({
        nom: req.body.nom,
        adresse: req.body.adresse,
        mail: req.body.mail
    });
    res.send(req.body);
});

//  pour Materiel model

router.get('/materiel', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    Materiel.findAll().then(mat => {
        res.json(mat);    
    })
});

router.post('/materiel', function (req, res) {
    Materiel.create({
        marque: req.body.marque,
        modele: req.body.modele,
        categorie: req.body.categorie,
        gaec_id: req.body.gaec_id,
        urlImage: req.body.urlImage,
    });
    res.send(req.body);
});