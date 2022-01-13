import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import {CharacterCard} from './styled'

const CharacterListPage = ()=>{
    const [characterList, setCharacterList] = useState({})
        
    useEffect(()=>{
    axios.get(`${BASE_URL}/people`)
    .then((res) =>{setCharacterList(res.data.results})
    .catch((err) => {alert(error.response.message)})
    }, [])

     function showCharacters(){
        return characterList.map((character, index)=>{
            return <CharacterCard key={index}>{character.name}</CharacterCard>
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