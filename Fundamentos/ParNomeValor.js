// par nome/valor
const saudacao = 'Opa' //contexto lexico 1 - Escopo

function exec() {
    const saudacao = 'Falaaaa' // contexto lexico 2 - Escopo
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)