import {React} from 'react'
import {useHistory} from 'react-router-dom'

export function AdminHomePage() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToHome = () => {
        history.push("/")
    }

    return (
        <div>

            <p>AdminHomePage</p>
            <button onClick={goBack}>Voltar</button>
            <button onclick={goToHome}>Ir para HomePage</button>

        </div>

    )

}

