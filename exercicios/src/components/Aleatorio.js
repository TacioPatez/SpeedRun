import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

export default props => {
    const random = Math.random() * (props.max - props.min) + props.min
    return  <Text style={Estilo.txtGrande}> {Math.floor(random)} </Text>
}


