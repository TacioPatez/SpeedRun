const nums = [1, 2, 3, 4, 5]

// Map cria um novo array a partir do original, mas transformandos os elementos de
// acordo uma funcao

let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)

let resultadoComOutraFuncao = nums.map(e => e * 2)
console.log(resultadoComOutraFuncao)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)