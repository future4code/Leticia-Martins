import React from 'react'
import {LogoImage, ScreenContainer, InputContainer} from '../LoginPage/styled-components'
import logo from '../../assets/logo.png'
import {Button} from '@material-ui/core'
import {SignUpButtonContainer} from '../LoginPage/styled-components'
import LoginForm from '../LoginPage/LoginForm'
import {useHistory} from 'react-router-dom'
import {goToSignUp} from '../../route/coordinator'

const LoginPage = () => {
    const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={logo}/>
            <LoginForm/>
        <InputContainer>
                    </InputContainer>

            <SignUpButtonContainer>
                   <Button
                    onClick = {() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant = {"text"}
                    color = {"primary"}

                >
                    Não possui conta? Cadastre-se

                    </Button>

            </SignUpButtonContainer>

        </ScreenContainer>

    )

}

export default LoginPage