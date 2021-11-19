import React from 'react';

export default class TelaCadastroUsuario extends React.Component{
    render(){
        return(
            <div>
                
                <button onClick = {this.props.irParaLista}> Ir para a Lista de Usuários</button>
                <h2>Cadastro</h2>

            </div>

        )

    }

}