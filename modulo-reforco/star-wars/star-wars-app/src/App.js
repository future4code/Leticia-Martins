import React from  'react'
import Router from './routes/Router'



const  App = () =>{
  // const currentScreen, setCurrentScreen = useState"list"
         
  // function selectPage 
  //  ifcurrentScreen === "list" 
  //    return <CharacterListPage/>
  //  else
  //     return <CharacterDetailPage/>
  //   
  // 
   
  return(
    <div>  
      {/* {selectPage()}       */}
      <Router/>
    </div>
     )
  }

export default App