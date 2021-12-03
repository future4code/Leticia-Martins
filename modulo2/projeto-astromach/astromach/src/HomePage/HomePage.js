import React from 'react'
import axios from 'react'
import {useState, useEffect} from 'react'

export default function HomePage(){
    const [profile,setProfile] = useState({})
   
    const pegarProfile = () =>{
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:leticia/person')
        .then((res)=>{
        const newProfile = res.data.profile
        setProfile(newProfile)
    })
    .catch((err) =>{
        
    })
}

useEffect(() =>{
    pegarProfile()
},[])


   
    
   




        return(
            <div> 
            profile.id? 
            <p>{profile.name}</p>
            :
            <p>não há perfil disponível</p>
            
            
                      
            </div>
        )

    }


