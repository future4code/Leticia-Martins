import React from 'react'



export default class Etapa1 extends React.Components {
  state = {
    valorNome: "",
    valorIdade:"",
    valorEmail: "",
    valorEscolaridade: ""
    
  }
    onChangeNome = () => {

    }

    onChangeIdade = () => {

    }

    onChangeEmail = () => {

    }

    onChangeEscolaridade = () => {

    }

    render(){
  
      return (
    <div>
      <input onChange = {this.onChangeNome} placeholder = {"Nome"}/>
      <input onChang = {this.onChangeIdade} placeholder = {"Idade"}/>
      <input onChang = {this.onChangeEmail} placeholder = {"Email"}/>
      <input onChang = {this.onChangeEscolaridade} placeholder = {"Grau Escolaridade"}/>
      
    </div>
  );
}
}
