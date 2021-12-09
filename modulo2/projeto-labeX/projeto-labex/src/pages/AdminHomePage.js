import React from 'react'
import {useHistory} from 'react-router-dom'

const AdminHomePage = () => {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToHome = () => {
        history.push ("/HomePage")
    }




    return (
        <div>
            
            <p>AdminHomePage</p>

        </div>

    )

}

export default AdminHomePage