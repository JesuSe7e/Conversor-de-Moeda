export default async function chamarApi(de, para) {
    try{
        const URL = `https://hexarate.paikama.co/api/rates/${de}/${para}/latest`
        const resp = await fetch(URL)
        const obj = await resp.json()

        const conversao = obj.data.mid
        console.log(conversao)
        return conversao

    } catch(erro) {
        console.log("Erro: ", erro)
    }
}

//module.exports = chamarApi

//chamarApi('BRL','BRL')