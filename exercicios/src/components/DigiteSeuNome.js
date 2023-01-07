import React, { useState } from 'react'
import {View,Text, TextInput} from 'react-native'
import Estilo from './Estilo'

export default props => {
    const [nome, setNome] = useState('Teste')
    return(
        <View>
            <TextInput 
                placeholder='Digite seu Nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}