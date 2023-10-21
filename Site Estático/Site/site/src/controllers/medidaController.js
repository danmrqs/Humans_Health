var medidaModel = require("../models/medidaModel");

function listarGuias(req, res) {

   
    var fkGuia = req.params.guiaServer;

   

    medidaModel.listarGuias(fkGuia).then(function (novoRegistro) {
        if (novoRegistro.length > 0) {
            res.status(200).json(novoRegistro);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
   
    
}




function buscarUltimasMedidas(req, res) {

    var fkGuia = req.params.guiaServer;

    console.log(`Recuperando ultimas medidas`);

    medidaModel.buscarUltimasMedidas(fkGuia).then(function (registroMensal) {
        console.log("cheguei")
        if (registroMensal.length > 0) {
            res.status(200).json(registroMensal);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarGuias,
    buscarUltimasMedidas

}