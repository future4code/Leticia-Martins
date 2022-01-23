import React from 'react'
import {InputContainer} from '../SignUpPage/styled-components'
import useForm from '../../hooks/useForm'
import Textfield from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import {SignUpFormContainer} from './styled-components'

const SigUpForm = () => {
    const history = useHistory ()
    const [form, onChange, clear] = useForm ({email:"", password:""})

    const onSubmitForm = (event) =>{
            event.preventDefault()
            console.log(form)
    }
    
    return (

        <form onSubmit={onSubmitForm}>
         
         <SignUpFormContainer>
        
         <InputContainer>

                <Textfield
                    name = {"name"}
                    value = {form.name}
                    onChange = {onChange}
                    label = {"Nome"} 
                    variant = {"outlined"}
                    fullWidth
                    margin = {"normal"} 
                    required
                    
                    

                />
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
                    type={"password"}
                                        
                />
                 </InputContainer>
                
                <Button
                    
                    fullWidth
                    variant = {"contained"}
                    color = {"primary"}
                    margin = {"normal"}
                    type={"submit"}
                >
                    Fazer Cadastro
                </Button>                  
                </SignUpFormContainer>
            </form>
)

}

export default SigUpForm