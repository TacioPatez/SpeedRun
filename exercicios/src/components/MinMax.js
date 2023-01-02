import React from "react"
import { Text } from 'react-native'
import Estilo from './Estilo'

export default props => (
    <Text style={Estilo.txtGrande}>O valor {props.max} é maior que o valor {props.min}!</Text>
)
