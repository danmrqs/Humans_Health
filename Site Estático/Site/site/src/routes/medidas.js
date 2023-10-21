var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/listarGuia/:guiaServer", function (req, res) {
    medidaController.listarGuias(req, res);
});

router.get("/ultimas/:guiaServer", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

module.exports = router;