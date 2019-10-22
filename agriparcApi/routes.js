var express = require('express');
var app = express();
var router = express.Router();
var Gaec = require('./model/GaecModel');
app.use(Gaec);
router.use(express.json());

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    router.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

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
    }).then(function(gaec) {
        res.send(gaec);
    });
    
});

module.exports = router;