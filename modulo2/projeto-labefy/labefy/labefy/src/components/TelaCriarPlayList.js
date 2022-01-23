import React from 'react';


export default class TelaCriarPlayList extends React.Component {
   state = {
        nome:"",

   }
   
   handleNome = (event) => {
       this.setState({nome: event.target.value})
   }

   incluirPlaylist = () => {
        console.log (this.state)

   }



    render(){
        return(
            <div>
                <button onClick={this.props.irParaListaPlayList}> Ir para Lista PlayList</button>            
                <h2>Criar minha Playlist</h2>
                <input 
                placeholder={"nome"}
                value={this.state.name}
                onchange={this.handleNome}
                />
                <button onClick={this.incluirPlaylist}>Incluir</button>
                
                
            </div>

        )

    }

}
    
