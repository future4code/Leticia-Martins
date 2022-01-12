import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import {CharacterCard} from './styled'

function CharacterListPage(){
    const [characterList, setCharacterList] = useState([])
        
    function getCharacterList(){
        axios.get(`${BASE_URL}/people`)
        .then((response) => setCharacterList(response.data.results))
        .catch((error) => console.log ("Erro:", error.message))
    }
    function showCharacters(){
        return characterList.map((character, index)=>{
            return <CharacterCard key={index}>{character.name}</CharacterCard>
        })
    }
          
        return (<div>
            <h1>Lista de Personagens</h1>
            {showCharacters()}
            </div>)
    }

    export default CharacterListPage