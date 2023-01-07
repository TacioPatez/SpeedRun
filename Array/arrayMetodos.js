const pilotos = ['Vettel', 'Alons', 'Raikkonen', 'Massa'] // por ser const - sempre sera um array, mas os elementos desse array poderao ser mexidos
pilotos.pop() // tira o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //adiciona no fim do array
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no inicio
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 3) //novo array a partir do 2 até antes do 3
console.log(algunsPilotos2)