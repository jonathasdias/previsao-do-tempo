import recebendoDadosApi from "./consumoApi.js";

let formCepElement = document.getElementById('input-cep-form');

let formCidadeElement = document.getElementById('input-cidade');
let formEstadoElement = document.getElementById('input-estado');
let formEnderecoElement = document.getElementById('input-endereco');
let formBairroElement = document.getElementById('input-bairro');
let formIbgeElement = document.getElementById('input-ibge');

async function completarDadosFormCep() {
    let obj = await recebendoDadosApi(formCepElement.value);

    if(obj.status == 400 || obj.status == 404){
        console.error("Deu erro");
        formCidadeElement.value = ''
        formEstadoElement.value = ''
        formEnderecoElement.value = ''
        formBairroElement.value = ''
        formIbgeElement.value = ''
    } else {
        formCidadeElement.value = obj.city
        formEstadoElement.value = obj.state
        formEnderecoElement.value = obj.address
        formBairroElement.value = obj.district
        formIbgeElement.value = obj.city_ibge
    }
}

document.getElementById('input-cep-form').addEventListener('blur', ()=>{
    completarDadosFormCep();
});

document.getElementById('form-cep').addEventListener('submit', (e)=>{
    e.preventDefault();
});