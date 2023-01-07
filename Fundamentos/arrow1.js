let dobro = function(a) {
    return 2*a
}

dobro = (a) => {    // Funcao arrow eh uma funcao anonima, ou seja, vc nao pode chamar ela
    return 2*a      // se quiser chamar ela, armazena ela em uma variavel
}

dobro = (a) => 2*a  // mesma coisa que o anterior, mas com retorno implicito