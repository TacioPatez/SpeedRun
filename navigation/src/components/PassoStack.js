import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => (
    <View style={{flex: 1,}}>
        <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
            {props.voltar //props.voltar eh o parametro string que define qual a tela anterior
                ?  <Button
                        title='Voltar'
                        onPress={() =>{
                            props.navigation.goBack() // metodo goBack volta pra tela anterior sem precisar especificar
                        }}
                    />
                : false
            }
            {props.avancar //props.avancar eh o parametro string que define qual proxima tela
                ?  <Button
                        title='Avançar'
                        onPress={() =>{
                                                    //props.navigation.navigate(props.avancar) //Se eu quiser chamar a mesma tela com parametros
                            props.navigation.push(  //diferentes, eu uso o push, caso contrario, o navigation nao avanca pra tela igual
                                props.avancar,                              // 1o parametro e o proximo stack da rota
                                { numero: parseInt(Math.random()*100) }     // 2o parametro sao os pametros  da rota(params)
                            )   
                        }}
                    />
                : false
            }
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)