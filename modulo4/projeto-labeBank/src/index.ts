import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { accounts } from './accounts'

const app: Express=express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req:Request, res:Response)=>{
    try{
        const{name, cpf, birthDate} = req.body

        accounts.push({
            name,
            cpf,
            birthDate,
            balance:0,
            statement:[]
        })

        res.status(201).send("Conta criada com sucesso")
        
    } catch (error) {
        res.status(400).send(console.error(onmessage))
        
    }


app.listen(3003,()=>{
    console.log("Server is running in localhost 3003")})
})