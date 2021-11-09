
import React from 'react'
import styled from 'styled-components'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'

export default class App extends React.components {
 


  render(){
  
  return (
    <div>
      <Etapa1/>
      <Etapa2/>
      <Etapa3/>
      <Final/>
    </div>
  );
}
}

