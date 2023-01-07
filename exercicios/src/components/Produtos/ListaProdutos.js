import React from 'react'
import { Text } from 'react-native'
import Estilo from '../Estilo'

import produtos from './Produtos'

export default props => {
    return (
        <>
            <Text style={Estilo.txtGrande}>
                Lista de Produtos
            </Text>
            {produtos.map(p => {
                return <Text key={p.id}>{p.id}) {p.nome} tem R$ {p.preco}</Text>
            })}
        </>
    )
}