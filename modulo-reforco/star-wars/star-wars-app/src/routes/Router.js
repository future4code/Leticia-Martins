import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import CharacterListPage from '../pages/CharacterListPage/CharacterListPage'
import CharacterDetailPage from '../pages/CharacterDetailPage/CharacterDetailPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                    <Route exact path="/" >
                        <CharacterListPage/>
                    </Route>
                    
                    <Route exact path="/Detalhe/:id">
                        <CharacterDetailPage/>
                    </Route>

                    <Route>
                        <ErrorPage/>
                    </Route>
            </Switch>
        </BrowserRouter>

    )

    
}

export default Router