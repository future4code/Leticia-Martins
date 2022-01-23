import React from 'react';
import TelaCriarPlayList from './components/TelaCriarPlayList';
import TelaListaPlayList from './components/TelaListaPlayList';

export default class App extends React.Component {
  state ={
      telaAtual: "Criar minha PlayList"

  }
  
  escolheTela = () =>{
      switch(this.state.telaAtual){
          case "Criar minha PlayList":
            return <TelaCriarPlayList irParaListaPlayList={this.irParaListaPlayList}/>
          case "Lista PlayList":
            return<TelaListaPlayList irParaCriarPlayList={this.irParaCriarPlayList}/>
          default:
            return <div>Erro! Pagina not found...</div>
      }



  }
  irParaCriarPlayList = () => {
      this.setState({telaAtual: "Criar minha PlayList"})

  }

  irParaListaPlayList = () => {
      this.setState({telaAtual:"Lista PlayList"})

  }


  render(){
  return (
        <div>
          {this.escolheTela()}         

        </div>
  )
}
}

