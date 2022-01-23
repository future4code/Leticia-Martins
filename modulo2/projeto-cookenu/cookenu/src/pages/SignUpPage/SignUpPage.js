import React from 'react'
import {LogoImage} from './styled-components'
import logo from '../../assets/logo.png'
import SignUpForm from './SignUpForm'
import {ScreenContainer} from './styled-components'


const SignUpPage = () => {
    return(
            <ScreenContainer>
                <LogoImage src={logo}/>
                <SignUpForm/>
            </ScreenContainer>

        

    )

}

export default SignUpPage