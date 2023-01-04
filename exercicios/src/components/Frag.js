import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './Estilo'

export default props => (
    //<View> // Para retornar apenas os textos, deve-se criar um React.Fragment ou <> e </>
    //<React.Fragment>
    <>
        <Text style={Estilo.txtGrande}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>
    //</React.Fragment>
)
