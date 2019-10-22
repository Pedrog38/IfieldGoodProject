var express = require('express');
var app = express();
var router = express.Router();
var Gaec = require('./model/GaecModel');
app.use(Gaec);
router.use(express.json());

router.get('/gaec', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    Gaec.findAll().then(gaec => {
        res.json(gaec);    
    })
});

router.post('/gaec', function (req, res) {
    res.send(req.body);
    Gaec.create({
        nom: req.body.nom,
        adresse: req.body.adresse,
        mail: req.body.mail
    });
});

module.exports = router;