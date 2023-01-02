import React from 'react'
import { Text } from 'react-native'
import Fonte from './Estilo'

function Comp() {
    return <Text style={Fonte.txtGrande}> Comp #Oficial</Text>
}

function Comp1() {
    return <Text style={Fonte.txtGrande}> Comp #01</Text>
}

export default function Comp2() { // exporta por padrão
    return <Text style={Fonte.txtGrande}> Comp #02</Text>
}

export {Comp, Comp1}
