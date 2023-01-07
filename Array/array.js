let aprovados = new Array('Bia1', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', "Carlos", 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' //Forma de adicionar elemento ao Array
console.log(aprovados[3])

aprovados.push('Ultimo Elemento')
console.log(aprovados.length)

aprovados.sort() // ordena o Array
console.log(aprovados)

delete aprovados[1] // deleta o elemento do array mas nao reogarniza, ou seja, aquele indice fica undefined
console.log(aprovados[1])

aprovados = ['Bia', "Carlos", 'Ana'] // criando novo array
console.log(aprovados)
aprovados.splice(0, 1, "Lucas", "Felipe") //indice de comeco | numero de elementos que serao excluidos a partida daquilo | ... elementos que serão adcionados no lugar // remove e adciona elementos #
console.log(aprovados)