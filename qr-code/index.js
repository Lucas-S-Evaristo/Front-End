// const { listenerCount } = require("process");

// (async () => {
//     const db = require("./db");
//     console.log('Começou!');
//     console.log('SELECT * FROM ADMINISTRADOR');
//     const administrador = await db.selectCustomer();
//     console.log(administrador);
// })();

// function fazerGet(url) {
//     var request = new XMLHttpRequest()
//     request.open("GET", url, false)
//     request.send()
//     return request.responseText;
// }

// function main() {
//     let data = fazerGet("http://http://localhost:8080/api/administrador");
//     // variavel para acessar os atributos
//     let usuario = JSON.parse(data);
//     usuario.id = document.createElement('li')
    

    

// }
// main()
function getHistorico(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText;
}
function pegaLinha(evento){
    console.log(evento)
    var linha = document.createElement("div");
    var tdId = document.createElement("h5");
    tdId.classList.add('id')
    var tdNome = document.createElement("h6");
    tdNome.classList.add('nome')
    var tdNif = document.createElement("p");
    tdNif.classList.add('nif')
    var tdSenha = document.createElement("p");
    tdSenha.classList.add('senha')

    tdId.innerHTML = evento.id
    tdNome.innerHTML = evento.nome
    tdNif.innerHTML = evento.nif
    tdSenha.innerHTML = evento.senha

    
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdNif);
    linha.appendChild(tdSenha);

    return linha;
}
function main(){
    let data = getHistorico("http://localhost:8080/api/administrador")
    let eventos = JSON.parse(data);
    let tabela = document.getElementById("tabela")

    eventos.forEach(element => {
        let linha = pegaLinha(element);
        tabela.appendChild(linha);
    });

    //console.log(eventos)
}
main()