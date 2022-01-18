import{React, useState} from  'react'
import CharacterListPage from './pages/CharacterListPage/CharacterListPage'
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage'
import {goToDetailPage, goToListPage} from './routes/coordinator'


const  App = () => {
  const [currentScreen, setCurrentScreen] = useState ("list")


         
  const selectPage = ()=> {
   if (currentScreen === "list" ) {
     return <CharacterListPage onClick = {()=>goToDetailPage()}/>
} else {
      return <CharacterDetailPage onClick = {()=>goToListPage()}/>
}
}

return (
    <div>
      {selectPage()}
    </div>
)
}

 
export default App