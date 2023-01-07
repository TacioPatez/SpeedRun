// reescrita do thisEBind2 com arrow function

function Pessoa() {
    this.idade = 0

    setInterval(() => {   // com o Arrow Function, o problema com o this nao existe.
        this.idade++
        console.log(this.idade)
    }, 1000)  
}

new Pessoa()