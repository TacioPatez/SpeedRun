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
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        backgroundColor: 'pink'
    }
})