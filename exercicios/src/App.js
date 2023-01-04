import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Diferenciar from './components/Diferenciar'
import Primeiro from './components/Primeiro'
import X, {Comp,Comp1} from './components/Multi' // x = funcao que foi exportada por default
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Frag'
import Botao from './components/Botao'
import Contador from './components/Contador'

// Maneiras de Dar o Export

function App() {                                //max = inteiro - min = string
    return <View style={style.AppEstilo}>
        <Diferenciar/>
        {/*
        <Contador incial={100}/>
        <Botao/>
        <Titulo principal = "Cadastro Produto"
                secundario = "Tela de Cadastro do produto" />
        <Aleatorio max={50} min={2}/>
        <MinMax max={5} min='2'/> 
        <Comp/>
        <Comp1/>
        <X/>
        <Text>
           {1+1}
        </Text>
        <Primeiro></Primeiro> */}
        </View>
    // return <Text> Primeiro Componente </Text> // retornando JSX eh possivel apenas no react, nao no JS
}

// const App = function () {
//     return <Text> Primeiro Componente </Text>
// }

// export default function () {
//     return <Text> Primeiro Componente </Text>
// }

//export default () => <Text> Primeiro Componente </Text>

export default App 

const style = StyleSheet.create({
    AppEstilo: {
        backgroundColor: '#FFFFFF', //Background Branco
        flexGrow: 1,                // o vermelho ocupa a tela inteira | funciona de 0.0 a 1.0
        justifyContent: 'center',   // no meio da tela no eixo Y
        alignItems: 'center',       // no meio da tela no eixo X
        padding: 20
    }
})