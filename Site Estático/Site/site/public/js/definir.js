function trocar() {
    tela01.style.display = 'none'
    tela02.style.display = 'block'
    
}

function trocarDois() {
    tela01.style.display = 'none'
    tela02.style.display = 'none'
    tela03.style.display = 'block'
}

function trocarTres() {
    tela01.style.display = 'none'
    tela02.style.display = 'none'
    tela03.style.display = 'none'
    tela04.style.display = 'block'
}

function fim() {
    tela01.style.display = 'none'
    tela02.style.display = 'none'
    tela03.style.display = 'none'
    tela04.style.display = 'none'
    tela05.style.display = 'block'
}

function trocarTreino() {

    fetch("/usuarios/trocarTreino", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkGuia : fkGuiaServer,
            idUsuario : idUsuarioServer
        }),
    }).then(function (resposta) {
        console.log("Entrando no then")

        if (resposta.status == 200) {
            resposta.json().then((json) => {
                console.log(json)

                dados => {
                    console.log(dados)
        
                    sessionStorage.nome = dados.nome
                    sessionStorage.idUsuario = dados.idUsuario
                    sessionStorage.fkGuia = dados.fkGuia
        
                    setTimeout(() => {
                      if (dados.fkGuia == 1) {
                        window.location = "./Guia-Emagrecer.html"
                      } else if (dados.fkGuia == 2) {
                        window.location = "./Guia-Definir.html"
                      } else if (dados.fkGuia == 3) {
                        window.location = "./Guia-Crescer.html"
                      }
                      
                    }, "1000")
                }

            })
        } else {
            console.log("Erro ao realizar busca")
        
            resposta.text().then((texto) => {
                console.log(texto)
            })
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados: ${error.message}`);
        });
    }
