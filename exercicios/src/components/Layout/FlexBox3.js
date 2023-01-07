import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default  props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado/>
            <Quadrado color = '#0F0'/>
            <Quadrado color = 'red'/>
            <Quadrado color = 'blue'/>
            <Quadrado color = 'gray'/>
            <Quadrado color = 'orange'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flexDirection: 'row', // troca o padrão de coluna pra linha
        justifyContent: 'space-evenly', // alinhamento eixo primario - nesse caso o X
        alignItems: 'center', // alinhamento eixo secundario - nesse caso o Y
        height: 350,
        width: '100%',
        backgroundColor: 'pink'
    }
})