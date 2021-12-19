import axios from 'axios'
import {BASE_URL} from '../constants/url'
import {goToRecipesList} from '../route/coordinator'


export const login = (body, clear, history)=> {
    axios.post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(history)
        })
        .catch((err) => alert("Erro no Login"))
}
