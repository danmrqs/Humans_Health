function entrar() {
    var email = ipt_email.value
    var senha = ipt_senha.value
    var erro = false

    ipt_email.style.border = "solid 2px #000000"
    ipt_senha.style.border = "solid 2px #000000"

    if (email == "" || !email.includes("@") || !email.includes(".com")) {
        erro = true
        span_email.style.display = "block"
        ipt_email.style.border = "solid 2px #ff0000"
    } else {
        span_email.style.display = "none"
    }

    if (senha.length < 8 || senha == "") {
        erro = true
        span_senha.style.display = "block"
        ipt_senha.style.border = "solid 2px #ff0000"
    } else {
        span_senha.style.display = "none"
    }

    if (erro != true) {
        
        fetch("/usuarios/entrar", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              emailServer: email,
              senhaServer: senha
            })
          }).then(function (resultados) {
            console.log("resultados: ", resultados);
      
            if (resultados.ok) {
              resultados.json().then(
      
                dados => {
                  console.log(dados)
      
                  sessionStorage.nome = dados.nome
                  sessionStorage.fkGuia = dados.fkGuia
      
                  setTimeout(() => {
      
                    window.location = "./Comunidade.html"
                  }, "1000")
      
                })
      
            } else {
              alert("Houve um erro ao entrar!")
            }
      
          }).catch(function (resultados) {
            console.log(`ERRO: ${resultados}`)
          });
      
          return false
      
        }
    } 


