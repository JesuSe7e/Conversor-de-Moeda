import chamarApi from "./api.js"

const valor = document.getElementById('valor')
const moedaDe = document.getElementById('lista1')
const moedaPara = document.getElementById('lista2')
const btnInverter = document.getElementById('inverter')
const btnConverter = document.getElementById('converter')
const div = document.getElementById("divResposta")

const formatador = new Intl.NumberFormat("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})

function criarResposta(msg1, msg2) {
    div.innerHTML = ''
    div.innerHTML = `${msg1}<br>${msg2}`
}

valor.addEventListener("input", (e) => {
    let event = e.target.value.replace(/\D/g, "")
    
    if(event === "") {
        e.target.value = ""
        return
    }
    
    event = (Number(event) / 100).toFixed(2)
    
    e.target.value = formatador.format(event)
})

btnInverter.addEventListener("click", () => {
    let de = moedaDe.value
    let para = moedaPara.value
    
    moedaDe.value = para
    moedaPara.value = de
})

btnConverter.addEventListener("click", async () => {
    const cotacao = await chamarApi(`${moedaDe.value}`,`${moedaPara.value}`)

    const valorNumber = (valor.value.replace(/\D/g, "") / 100)
    const valorCotado = (valorNumber * cotacao).toFixed(2)

    const msgValorConvertido = `Valor Convertido: $ ${formatador.format(valorCotado)}`
    const msgCotacao = `Valor Inserido: $ ${formatador.format(valorNumber)}`

    criarResposta(msgCotacao,msgValorConvertido)

    console.log(valorCotado)
    console.log(cotacao)
})
