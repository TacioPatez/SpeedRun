import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './Estilo'

export default ({incial = 0}) => {
    // let numero = props.inicial // Se fizer isso, a interface grafica nao atualiza quando muda
    const [numero, setNumero] = useState(incial)

    const incrementa = () => setNumero(numero + 1)
    const decrementa = () => setNumero(numero - 1)

    return (
        <>
            <Text style={Estilo.txtGrande}>{numero}</Text>
            <Button title='+' onPress={incrementa} />
            <Button title='-' onPress={decrementa} />
        </>
    )
}