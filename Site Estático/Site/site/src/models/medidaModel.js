var database = require("../database/config");

function listarGuias(fkGuia) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select nomeGuia, count(*) as contagem from guia join cadastro on idGuia = fkGuia group by idGuia`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidas(fkGuia) {
    
    fkGuia = req.params.guiaServer;
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
            select count(*) as contagem from cadastro
            `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listarGuias,
    buscarUltimasMedidas
}

// function buscarUltimasMedidas(fkGuia, limite_linhas) {

//     instrucaoSql = ''

//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         instrucaoSql = `select top ${limite_linhas}
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,  
//                         momento,
//                         FORMAT(momento, 'HH:mm:ss') as momento_grafico
//                     from medida
//                     where fk_aquario = ${idAquario}
//                     order by id desc`;
//     }
    // else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    //     instrucaoSql = `select fkGuia from cadastro 
    //                     where fkGuia = ${fkGuia}  
    //                     order by id desc limit ${limite_linhas}`;
    // } 
    // else {
    //     console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
    //     return
    // }

    // console.log("Executando a instrução SQL: \n" + instrucaoSql);
    // return database.executar(instrucaoSql);
// }