import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import PassoStack from "../components/PassoStack";

const Stack = createNativeStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="TelaA" //headerShown define se tem o cabecalho
        screenOptions={{ headerShown: true }}> 
        <Stack.Screen name="TelaA" 
            options={{title: 'Primeira Tela'}}>
            {props => (                                    // o {...props} serve pra passar a propriedade do pai e Vai avancar pra Tela B
                <PassoStack {...props} avancar='TelaB'>   
                    <TelaA/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB" 
            options={{title: 'Segunda Tela'}}>
            {props => (                         /*<TelaB/> = Exibe Tela B */           
                <PassoStack {...props} voltar avancar='TelaC'>
                    <TelaB/>   
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC" 
            options={{title: 'Ultima Tela'}}>
            {props => (
                <PassoStack {...props} voltar avancar='TelaC'>
                    <TelaC {...props} />   
                </PassoStack>
            )}
        </Stack.Screen>

    </Stack.Navigator>
)