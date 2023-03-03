let keyApi =  "";

let loader = document.getElementById('loader');
let containerErro = document.getElementById('containerErro');
let dv_dados = document.querySelector('.dv-dados');
let inputPesquisar = document.getElementById('input-pesquisar');
let btnPesquisar = document.getElementById('btn-pesquisar');
let cidadeElement = document.querySelector('.cidade');
let temperaturaElement = document.querySelector('.temperatura');
let descricaoElement = document.querySelector('.descricao');
let imgClima = document.getElementById('img-clima')
let umidadeElement = document.querySelector('.umidade');
let vel_ventoElement = document.querySelector('.vel-vento');


async function tratamentoDados() {

    let resJson = await pegarDadosApi();

    if(resJson.cod == '400' || resJson.cod == '404'){
        containerErro.classList.remove('esconder')

    }else {
        cidadeElement.innerHTML = resJson.name
        temperaturaElement.innerHTML = parseInt(resJson.main.temp) + "&deg;C"
        descricaoElement.innerHTML = resJson.weather[0].description
        imgClima.setAttribute('src',`http://openweathermap.org/img/wn/${resJson.weather[0].icon}.png`)
        umidadeElement.innerHTML = resJson.main.humidity
        vel_ventoElement.innerHTML = resJson.wind.speed

        dv_dados.classList.remove('esconder')

        inputPesquisar.value = ''
        inputPesquisar.focus()
    }
}

function toggleLoader(){
    loader.classList.toggle('esconder')
}

async function pegarDadosApi() {

    btnPesquisar.style.display = 'none'
    dv_dados.classList.add('esconder')
    containerErro.classList.add('esconder')
    toggleLoader()

    let cidade = inputPesquisar.value

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${keyApi}&lang=pt_br`

    let res = await fetch(apiUrl)
    let resJson = await res.json()

    toggleLoader()

    btnPesquisar.style.display = 'inline-block'

    return resJson
};

function mostarDadosCidade() {
    tratamentoDados()
};


btnPesquisar.addEventListener('click', ()=>{
    mostarDadosCidade()
});

inputPesquisar.addEventListener('keyup', (e)=>{
    if(e.code === "Enter"){
        mostarDadosCidade()
    }
});