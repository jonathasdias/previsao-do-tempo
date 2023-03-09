import recebendoDadosApi from "./consumoApi.js"

let cepInputElement = document.getElementById('input-cep');

let spanCep = document.querySelector('.cep');
let spanEndereco = document.querySelector('.endereco');
let spanBairro = document.querySelector('.bairro');
let spanCidade = document.querySelector('.cidade');
let spanIbge = document.querySelector('.ibge');
let spanEstado = document.querySelector('.estado');

async function mostrarDadosCep() {
    let obj = await recebendoDadosApi(cepInputElement.value);

    if(obj.status == 400 || obj.status == 404){
        console.error("Deu erro");
        spanCep.innerHTML = ''
        spanEndereco.innerHTML = ''
        spanCidade.innerHTML = ''
        spanBairro.innerHTML = ''
        spanIbge.innerHTML = ''
        spanEstado.innerHTML = ''
    } else {
        spanCep.innerHTML = obj.cep
        spanEndereco.innerHTML = obj.address
        spanCidade.innerHTML = obj.city
        spanBairro.innerHTML = obj.district
        spanIbge.innerHTML = obj.city_ibge
        spanEstado.innerHTML = obj.state
    }
}

document.getElementById('btn-consulta').addEventListener('click', ()=>{
    mostrarDadosCep()
});