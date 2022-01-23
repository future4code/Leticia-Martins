import {React} from 'react'
import {useHistory} from 'react-router-dom'

export function HomePage  ()  {
        
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

    