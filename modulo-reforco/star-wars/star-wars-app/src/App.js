import React from  'react'
import { useState } from 'react'
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage'
import CharacterListPage from './pages/CharacterListPage/CharacterListPage'


const  App = () =>{
  const [currentScreen, setCurrentScreen] = useState("list")
         
  function selectPage () {
   if(currentScreen === "list") {
     return <CharacterListPage/>
   }else{
      return <CharacterDetailPage/>
    }
  }
   
  return(
    <div>  
      {selectPage()}      
    </div>
     )
  }

export default App