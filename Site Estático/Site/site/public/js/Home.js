
var label = []
var dadosGuia = []

var fkGuia = sessionStorage.fkGuia

listarGuias()


function listarGuias() {
    
    const labels = [
        'Crescer',
        'Definir'   ,
        'Emagrecer',
        
    ];
    
    var data =  {
        labels: labels,
        datasets: [{
            label: label[0],
            backgroundColor: ['#ADAAAB'],
            borderColor: ['#ADAAAB'],
            data: dadosGuia,
            borderWidth: 5
        }
        
        ]
    };
    
    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins:{legend:{display:false}},
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        } 
    };
    const myChart = new Chart( document.getElementById('myChart'), config );

    fetch(`/medidas/listarGuia/${fkGuia}`) .then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {
                
                console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                console.log(`Dados atuais do gráfico:`);
                
                
                for (var i = 0; i < novoRegistro.length; i++) {
                    
                    label.push(novoRegistro[i].nomeGuia)
                    dadosGuia.push(novoRegistro[i].contagem)
                    
                }
                myChart.update()
            }
            ) 
        }
    }
    )
    
    


}




// let proximaAtualizacao;

//     window.onload = obterDadosGraficos();

//     function obterDadosGraficos() {
//         obterDadosGrafico(1)
//         obterDadosGrafico(2)
//         obterDadosGrafico(3)
//         obterDadosGrafico(4)
//     }

//     verificar_autenticacao();

//     function alterarTitulo(fkGuia) {
//         var tituloAquario = document.getElementById(`tituloAquario${fkGuia}`)
//         tituloAquario.innerHTML = "Últimos cadastros" + fkGuia 
//     }

//     function exibirAquario(fkGuia) {
//         let todosOsGraficos = document.getElementById("graficos")

//         for (i = 1; i <= todosOsGraficos.childElementCount; i++) {
//             // exibindo - ou não - o gráfico
//             let elementoAtual = document.getElementById(`grafico${i}`)
//             if (elementoAtual.classList.contains("display-block")) {
//                 elementoAtual.classList.remove("display-block")
//             }
//             elementoAtual.classList.add("display-none")
            
//             // alterando estilo do botão
//             let btnAtual = document.getElementById(`btnAquario${i}`)
//             if (btnAtual.classList.contains("btn-pink")) {
//                 btnAtual.classList.remove("btn-pink")
//             }
//             btnAtual.classList.add("btn-white")
//         }
        
//         // exibindo - ou não - o gráfico
//         let graficoExibir = document.getElementById(`grafico${fkGuia}`)
//         graficoExibir.classList.remove("display-none")
//         graficoExibir.classList.add("display-block")
        
//         // alterando estilo do botão
//         let btnExibir = document.getElementById(`btnAquario${fkGuia}`)
//         btnExibir.classList.remove("btn-white")
//         btnExibir.classList.add("btn-pink")
//     }

//     // O gráfico é construído com três funções:
//     // 1. obterDadosGrafico -> Traz dados do Banco de Dados para montar o gráfico da primeira vez
//     // 2. plotarGrafico -> Monta o gráfico com os dados trazidos e exibe em tela
//     // 3. atualizarGrafico -> Atualiza o gráfico, trazendo novamente dados do Banco

//     // Esta função *obterDadosGrafico* busca os últimos dados inseridos em tabela de medidas.
//     // para, quando carregar o gráfico da primeira vez, já trazer com vários dados.
//     // A função *obterDadosGrafico* também invoca a função *plotarGrafico*

//     //     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     //     Para ajustar o "select", ajuste o comando sql em src/models
//     function obterDadosGrafico(fkGuia) {

//         alterarTitulo(fkGuia)

//         if (proximaAtualizacao != undefined) {
//             clearTimeout(proximaAtualizacao);
//         }

//         fetch(`/medidas/ultimas/${fkGuia}`, { cache: 'no-store' }).then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (resposta) {
//                     console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
//                     resposta.reverse();

//                     plotarGrafico(resposta, fkGuia);
//                 });
//             } else {
//                 console.error('Nenhum dado encontrado ou erro na API');
//             }
//         })
//             .catch(function (error) {
//                 console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
//             });
//     }

//     // Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
//     // Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
//     // A função *plotarGrafico* também invoca a função *atualizarGrafico*
//     function plotarGrafico(resposta, fkGuia) {

//         console.log('iniciando plotagem do gráfico...');

//         // Criando estrutura para plotar gráfico - labels
//         let labels = [];

//         // Criando estrutura para plotar gráfico - dados
//         let dados = {
//             labels: labels,
//             datasets: [{
//                 label: 'Umidade',
//                 data: [],
//                 fill: false,
//                 borderColor: 'rgb(75, 192, 192)',
//                 tension: 0.1
//             },
//             {
//                 label: 'Temperatura',
//                 data: [],
//                 fill: false,
//                 borderColor: 'rgb(199, 52, 52)',
//                 tension: 0.1
//             }]
//         };

//         console.log('----------------------------------------------')
//         console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
//         console.log(resposta)

//         // Inserindo valores recebidos em estrutura para plotar o gráfico
//         for (i = 0; i < resposta.length; i++) {
//             var registro = resposta[i];
//             labels.push(registro.momento_grafico);
//             dados.datasets[0].data.push(registro.umidade);
//             dados.datasets[1].data.push(registro.temperatura);
//         }

//         console.log('----------------------------------------------')
//         console.log('O gráfico será plotado com os respectivos valores:')
//         console.log('Labels:')
//         console.log(labels)
//         console.log('Dados:')
//         console.log(dados.datasets)
//         console.log('----------------------------------------------')

//         // Criando estrutura para plotar gráfico - config
//         const config = {
//             type: 'line',
//             data: dados,
//         };

//         // Adicionando gráfico criado em div na tela
//         let myChart = new Chart(
//             document.getElementById(`myChartCanvas${fkGuia}`),
//             config
//         );

//         setTimeout(() => atualizarGrafico(fkGuia, dados, myChart), 2000);
//     }


//     // Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
//     // buscando a última medida inserida em tabela contendo as capturas, 

//     //     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     //     Para ajustar o "select", ajuste o comando sql em src/models
//     function atualizarGrafico(fkGuia, dados, myChart) {



//         fetch(`/medidas/tempo-real/${fkGuia}`, { cache: 'no-store' }).then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (novoRegistro) {

//                     console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
//                     console.log(`Dados atuais do gráfico:`);
//                     console.log(dados);

//                     for (var i = 0; i < novoRegistro.length; i++) {
                        
//                         label.push(novoRegistro[i].nomeGuia)
//                         dadosGuia.push(novoRegistro[i].contagem)
                        
//                     }


                    

//                     let avisoCaptura = document.getElementById(`avisoCaptura${fkGuia}`)
//                     avisoCaptura.innerHTML = ""


//                     if (novoRegistro[0].momento_grafico == dados.labels[dados.labels.length - 1]) {
//                         console.log("---------------------------------------------------------------")
//                         console.log("Como não há dados novos para captura, o gráfico não atualizará.")
//                         avisoCaptura.innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> Foi trazido o dado mais atual capturado pelo sensor. <br> Como não há dados novos a exibir, o gráfico não atualizará."
//                         console.log("Horário do novo dado capturado:")
//                         console.log(novoRegistro[0].momento_grafico)
//                         console.log("Horário do último dado capturado:")
//                         console.log(dados.labels[dados.labels.length - 1])
//                         console.log("---------------------------------------------------------------")
//                     } else {
//                         // tirando e colocando valores no gráfico
//                         dados.labels.shift(); // apagar o primeiro
//                         dados.labels.push(novoRegistro[0].momento_grafico); // incluir um novo momento

//                         dados.datasets[0].data.shift();  // apagar o primeiro de umidade
//                         dados.datasets[0].data.push(novoRegistro[0].umidade); // incluir uma nova medida de umidade

//                         dados.datasets[1].data.shift();  // apagar o primeiro de temperatura
//                         dados.datasets[1].data.push(novoRegistro[0].temperatura); // incluir uma nova medida de temperatura

//                         myChart.update();
//                     }

//                     // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
//                     proximaAtualizacao = setTimeout(() => atualizarGrafico(fkGuia, dados, myChart), 2000);
//                 });
//             } else {
//                 console.error('Nenhum dado encontrado ou erro na API');
//                 // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
//                 proximaAtualizacao = setTimeout(() => atualizarGrafico(fkGuia, dados, myChart), 2000);
//             }
//         })
//             .catch(function (error) {
//                 console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
//             });

//     }