var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM cadastro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
   
    var instrucao = `
        SELECT * FROM vw_cadastro where email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, telefone, email, senha, confirmacao, fkGuia) {
   
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO cadastro (nome, telefone, email, senha, confirmacao, fkGuia) VALUES ('${nome}', '${telefone}', '${email}', '${senha}', '${confirmacao}', '${fkGuia}');
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function enviar(email, titulo, descricao) {
   
    var instrucao = `
        INSERT INTO faleConosco (email, titulo, descricao) VALUES ('${email}', '${titulo}', '${descricao}')
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function trocarTreino(fkGuia, idUsuario) {
   
    var instrucao = `
    UPDATE cadastro SET fkGuia = '${fkGuia}' where idUsuario = '${idUsuario}'; 

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    enviar,
    trocarTreino
};