import React from 'react'
import {useHistory} from 'react-router-dom'

export const HomePage = () => {
        
    const history = useHistory()

    const goToAdminHomePage = () => {
          history.push("/AdminHomePage")
        }

    return (
        <div>
          
            <p> HomePage </p>
            <button onClick={goToAdminHomePage}> Ir para Pagina do Administrador</button>

        </div>

    )
    }