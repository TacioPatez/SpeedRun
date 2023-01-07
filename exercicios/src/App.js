import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import Diferenciar from './components/Diferenciar'
import Primeiro from './components/Primeiro'
import X, {Comp,Comp1} from './components/Multi' // x = funcao que foi exportada por default
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import Titulo from './components/Frag'
import Botao from './components/Botao'
import Contador from './components/Contador'
import ListaProdutos from './components/Produtos/ListaProdutos'
import DigiteSeuNome from './components/DigiteSeuNome'
import Quadrado from './components/Layout/Quadrado'
import FlexBox1 from './components/Layout/FlexBox1'
import FlexBox2 from './components/Layout/FlexBox2'
import FlexBox3 from './components/Layout/FlexBox3'

// Maneiras de Dar o Export

function App() {                                //max = inteiro - min = string
    return <SafeAreaView style={style.AppEstilo}>
        <FlexBox3/>
        {/*
        <FlexBox2/>
        <FlexBox1/>
        <Quadrado/>
        <Quadrado color = '#0F0'/>
        <Quadrado color = 'red'/>
        <Quadrado color = 'blue'/>
        <DigiteSeuNome/>
        <ListaProdutos/>
        <Diferenciar/>
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
        </SafeAreaView>
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