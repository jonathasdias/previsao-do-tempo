export default async function recebendoDadosApi(inputValue) {
    let res = await fetch(`https://cep.awesomeapi.com.br/json/${inputValue}`)
    let obj = await res.json()

    return obj
}