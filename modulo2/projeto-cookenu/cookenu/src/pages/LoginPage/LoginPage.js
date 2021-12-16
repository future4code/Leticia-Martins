import React from 'react'
import {LogoImage, ScreenContainer, InputContainer} from '../LoginPage/styled-components'
import logo from '../../assets/logo.png'
import useForm from '../../hooks/useForm'
import Textfield from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

const LoginPage = () => {
    const [form, onChange, clear] = useForm ({email:"", password:""})

    const onSubmitForm = () =>{

    }
    
    

    return (
        <ScreenContainer>
            <LogoImage src={logo}/>

        <InputContainer>
            <form onSubmit={onSubmitForm}>
                <Textfield
                    name = {"email"}
                    value = {form.email}
                    onChange = {onChange}
                    label = {"E-mail"} 
                    variant = {"outlined"}
                    fullWidth
                    margin = {"normal"}                     
                />

                <Textfield
                    name = {"password"}
                    value = {form.password}
                    onChange = {onChange} 
                    label = {"Senha"} 
                    variant = {"outlined"}   
                    fullWidth
                    margin = {"normal"}                     
                />

                <Button
                    fullWidth
                    variant = {"contained"}
                    color = {"primary"}
                >
                    Fazer Login
                </Button>



            </form>
        </InputContainer>

        </ScreenContainer>

    )

}

export default LoginPage