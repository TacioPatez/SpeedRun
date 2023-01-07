Array.prototype.filter2 = function(callback) {
    const novoArray = []
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 18.99, fragil: true },
    { nome: 'Copo de Plástico', preco: 12.49, fragil: false }
]

console.log(produtos.filter2(function(p) {
    return p.preco >= 500 && p.fragil == true // resultado deve ser verdadeiro ou falso
}))