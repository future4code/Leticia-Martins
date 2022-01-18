import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import {CharacterCard} from './styled'
import { goToDetailPage } from '../../routes/coordinator'
import { useHistory
 } from 'react-router-dom'
const CharacterListPage = ()=>{
    const [characterList, setCharacterList] = useState([])
        
    const history = useHistory()
    useEffect(()=>{
        getCharacterList()
    },[])

const getCharacterList = () => {
    axios.get(`${BASE_URL}/people`)
    .then((response) =>setCharacterList(response.data.results))
    .catch((error) => console.log("Erro:", error.message))

    }

     const showCharacters=()=> {
            return characterList.map((character, index) => {
                return <CharacterCard onClick = {()=>goToDetailPage(history)} key={index}>{character.name}</CharacterCard>
            })
        }
          
        return (
        <div>
            <h1>Lista de Personagens</h1>
            {showCharacters()}
            
        </div>
            )
    }

    export default CharacterListPage