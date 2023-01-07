//tentando criar a funcao map

Array.prototype.map3 = function(callback) {
    const newArray = []
    for (var i = 0; i < this.length; i++) {
        newArray[i] = callback(this[i])
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Cardeno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.ma3(paraObjeto).map3(apenasPreco)
console.log(resultado)