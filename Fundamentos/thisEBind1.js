const pessoa = {
    saudacao: 'Bom Dia',
    falar (){
        console.log(this.saudacao) // sem o this, o atributo saudacao nao é reconhecido pois esta 
    }                               //dentro do escopo da funcao
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigma funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // resolução do conflito - .bind(objeto) define qm eh o this
falarDePessoa()