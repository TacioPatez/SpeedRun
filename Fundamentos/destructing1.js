//destructing de objeto usa {}
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // operador destructing
// Criando variavel nome e idade do tirada do objeto pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // criando variavel com nome alterado
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // bemHumorada == null, mas devido ao '=', veio como true
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro: log = 'true', numero: number, cep } } = pessoa //extraindo variavel de um objeto dentro de outro
console.log(log, number, cep)