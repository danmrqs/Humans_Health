function cadastrar() {
  
  //definindo as variáveis das inputs
    var nome = ipt_nome.value
    var telefone = ipt_telefone.value
    var email = ipt_email.value
    var senha = ipt_senha.value
    var confirmacao = ipt_confirmacao.value
    var fkGuia = 0
    var erro = false
    

    //definindo a borda
    ipt_nome.style.border = "solid 2px #000000";
    ipt_telefone.style.border = "solid 2px #000000";
    ipt_email.style.border = "solid 2px #000000";
    ipt_senha.style.border = "solid 2px #000000";
    ipt_confirmacao.style.border = "solid 2px #000000";
    

    //validação das inputs
    if (nome == "") {
        erro = true
        ipt_nome.style.border = "solid 2px #ff0000"
        span_nome.style.display = "block"
    } else {
        span_nome.style.display = "none"
    }
    
    if (isNaN(telefone) || telefone == "" || telefone.length < 11) {
        erro = true
        ipt_telefone.style.border = "solid 2px #ff0000"
        span_telefone.style.display = "block"
    } else {
        span_telefone.style.display = "none"
    }

    if (!email.includes("@") || !email.includes(".com") || email == "") {
        erro = true
        ipt_email.style.border = "solid 2px #ff0000"
        span_email.style.display = "block"
    } else {
        span_email.style.display = "none"
    }

    if (senha.length < 8) {
        erro = true
        ipt_senha.style.border = "solid 2px #ff0000"
        span_senha.style.display = "block"
    } else {
        span_senha.style.display = 'none'
    }

    if (confirmacao != senha || confirmacao == "") {
        erro = true
        ipt_confirmacao.style.border = "solid 2px #ff0000"
        span_confirmacao.style.display = "block"
    } else {
        span_confirmacao.style.display = "none"
    }

    //definindo o número de cada guia, para direcionar na guia em questão
    if (Emagrecer.checked) {
        fkGuia = 1
    } else if (Definir.checked) {
        fkGuia = 2
    } else if (Crescer.checked) {
        fkGuia = 3
    }
    
    //aqui se inicia o web-data-viz para cadastro
    if (erro != true) {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              // crie um atributo que recebe o valor recuperado aqui
              // Agora vá para o arquivo routes/usuario.js
              nomeServer: nome,
              telServer: telefone,
              emailServer: email,
              senhaServer: senha,
              confirmacaoServer: confirmacao,
              guiaServer: fkGuia,
            })
          }).then(function (respostas) {
      
            console.log("respostas: ", respostas);
      
            if (respostas.ok) {
      
              setTimeout(() => {
                window.location = "./Login.html";
              }, "1000")
      
            } else {
              alert ("Houve um erro ao tentar realizar o cadastro!");
            }
          }).catch(function (respostas) {
            console.log(`#ERRO: ${respostas}`);
          });
      
          return false;
      
        }
    
}
