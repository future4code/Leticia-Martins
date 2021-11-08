import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
    
      
           
  render(){
    
    
    return (
      
      <MainContainer>
        <Post 
        nomeUsuario = 'Leticia'
        fotoUsuario ='https://picsum.photos/id/237/50/51'
        fotoPost ='https://picsum.photos/id/1010/367/267'
        />
       
       <Post 
        nomeUsuario ='Joana'
        fotoUsuario='https://picsum.photos/50/51?grayscale'
        fotoPost='https://picsum.photos/id/10/367/267'
        />          
        
        <Post
        nomeUsuario= 'Carla'
        fotoUsuario='https://picsum.photos/id/1005/367/267'
        fotoPost='https://picsum.photos/id/1006/367/267'
        />      
      </MainContainer>
    )
  }
}

export default App;
