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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Leticia'}
          fotoUsuario={'https://picsum.photos/id/237/200/300'}
          fotoPost={'https://picsum.photos/200/300/?blur'}
        />
         <Post
          nomeUsuario={'Joana'}
          fotoUsuario={'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'}
          fotoPost={'https://i.picsum.photos/id/104/3840/2160.jpg?hmac=Rv0qxBiYb65Htow4mdeDlyT5kLM23Z2cDlN53YYldZU'}
        />
        <Post
          nomeUsuario={'Carla'}
          fotoUsuario={'https://picsum.photos/seed/picsum/200/300'}
          fotoPost={'https://picsum.photos/200/300?grayscale'}
        />
      </MainContainer>
    );
  }
}

export default App;
