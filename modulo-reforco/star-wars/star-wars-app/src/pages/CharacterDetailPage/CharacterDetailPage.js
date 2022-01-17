import React from 'react'
import { goToListPage } from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'

const CharacterDetailPage = ()=> {
    const history = useHistory()
    
        return (<div>
            <h1>Detalhe de personagens</h1>
            <button> onClick = {()=>goToListPage(history)} </button>
            
            </div>)
    }

    export default CharacterDetailPage