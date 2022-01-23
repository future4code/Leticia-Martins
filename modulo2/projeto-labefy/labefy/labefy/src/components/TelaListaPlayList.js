import React from 'react';

export default class TelaListaPlayList extends React.Component{
    render(){
        return(
            <div>
                
                <button onClick={this.props.irParaCriarPlayList}>Ir para criar playlist</button>
                
                <h2>Lista de PlayLists</h2>
                
                </div>

        )

    }

}