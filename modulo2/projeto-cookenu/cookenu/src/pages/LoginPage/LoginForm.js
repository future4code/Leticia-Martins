import React from 'react'
import {InputContainer} from '../LoginPage/styled-components'
import useForm from '../../hooks/useForm'
import Textfield from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'


const LoginForm = () => {
    const [form, onChange, clear] = useForm ({email:"", password:""})

    const onSubmitForm = (event) =>{
            event.preventDefault()
    }
    
    return (
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
                    required
                    type = {"email"}                    
                />

                <Textfield
                    name = {"password"}
                    value = {form.password}
                    onChange = {onChange} 
                    label = {"Senha"} 
                    variant = {"outlined"}   
                    fullWidth
                    margin = {"normal"}
                    required
                    type={"senha"}                     
                />

                <Button
                    
                    fullWidth
                    variant = {"contained"}
                    color = {"primary"}
                    margin = {"normal"}
                >
                    Login

                </Button>
            </form>
        </InputContainer>

)

}

export default LoginForm