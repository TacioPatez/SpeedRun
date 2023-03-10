import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    const r = props.route /*...route... para pegar parametros do .push que tiveram em toda rota */
    const numero = r && r.params && r.params.numero ? r.params.numero : 0
    return(
        <TextoCentral corDeFundo='#9932CD'>
            Tela C - {numero}
        </TextoCentral>
    )
}