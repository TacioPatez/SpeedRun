function Pessoa() {
    this.idade = 0

    const self = this // referenciando a propria função
    setInterval(function(){  // setInterval é uma funcao nativa
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)  
}
//Existem 2 maneiras de fazer a referencia certa do proprio objeto/funcao:
// cria uma constante que referia a si mesmo, evitando assim, o erro ou
// criando a bind, que especifica quem eh o this

new Pessoa()