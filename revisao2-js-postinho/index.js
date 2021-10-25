
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 2));

// // // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
    
//     return `No comparador de Igualdade ${a}===${b} é ${a === b}`
   
// }
// console.log(checarIgualdade(1, 2));

// // c-)Faça uma função chamada "verificaSeEMaior"

// function verificaSeEMaior(num1,num2){

//     if(num1 > num2){

//  console.log (`o ${num1} é maior que ${num2}`)

// } else{
//     console.log(`o ${num1} é menor que ${num2}`)
//         }
//     }
//     console.log(verificaSeEMaior(321, 2156));
    

// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'=     // false - aqui compara tipo e valor
// b-) 1=='1'=     // compara valor
// c-) 'a'==='b'= // false
// d-) 'b'>'a'=   // true - compara por ordem alfabética, quem vem depois é maior
// e-) 0!==null= //true - seria false pois 0 náo tem mesmo valor que null, porém com negação fica true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {
    
        
//         const nome = prompt("Digite o seu nome?")
//         const anoDeNascimento = Number(prompt("Digite seu ano de nascimento?"))
//         const senha = prompt("Digite a sua senha, ela deve ter mais de seis digitos")
//         const nacionalidade = prompt("Digite a sua nacionalidade?")
                
//         const usuarios = []

//         const usuario = {
//             nome: nome,
//             anoDeNascimento: anoDeNascimento,
//             senha: senha,
//             nacionalidade: nacionalidade

//         }

//         const idadeAtual = 2021 - anoDeNascimento

//         if(idadeAtual >= 18 && senha.length >=6 && nacionalidade === "brasileira" ){
           
//             console.log (`Olá ${nome}, usuário cadastrado com sucesso`)

//         }else{
//             console.log("Não foi possivel cadastrar o usuário")
//         }

//         usuarios.push(usuario)
//         return usuarios
        
// }
// console.log(cadastro());

//forma inversa Yuzo

// const cadastro = () => {

//         const nome = prompt("Digite o seu nome?")
//         const anoDeNascimento = Number(prompt("Digite seu ano de nascimento?"))
//         const senha = prompt("Digite a sua senha, ela deve ter mais de seis digitos")
//         const nacionalidade = prompt("Digite a sua nacionalidade?")
                
//         const usuarios = []

//         const usuario = {
//             nome: nome,
//             anoDeNascimento: anoDeNascimento,
//             senha: senha,
//             nacionalidade: nacionalidade

//         }

//         const idadeAtual = 2021 - usuario.anoDeNascimento

//         if(idadeAtual <=18){
//             return `Usuário precisa ser maior que 18 anos.`

//         }

//         if(senha.length < 6) {
//             return `Senha precisa ter no minimo 6 caracteres`
//         }

//         if(usuario.nacionalidade !== 'br'){
//             return `Usuário precisa ter nacionalidade "br"`
//         }

//             usuarios.push(usuario)
//             return usuarios
//     }   
//             console.log(cadastro());



// Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"

// function login (){

// const senha = prompt("Digite a sua senha cadastrada no site. Ela deve ter mais de seis digitos")
// if(senha === "Labenu"){
//     console.log ("Usuário logado")
// }else{
//     console.log ("Senha Inválida")
// }

// }

// console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     const nomeDoUsuario = prompt("Digite seu nome:")
//     const vacinaPrimeiraDose = prompt("Digite o nome da vacina que tomou:")
    
    
//     let tempo = 0
//     let data = new Date()

//     switch (vacinaPrimeiraDose) {
//         case "coronavac":
//             tempo = 28
//             break;
//         case "astrazeneca":    
//             tempo = 90
//             break
//         case "pfizer":
//             tempo = 90
//             break
//         default:
//             console.log("Vacina inválida")
//             break
//     }

       
//     data.setDate(data.getDate() + tempo)

//     const dataFormatada = data.toLocaleDateString()

//     return `Olá ${nomeDoUsuario}! A próxima dose da ${vacinaPrimeiraDose} é daqui a ${tempo}dias. Compareça no posto na data ${dataFormatada}`
// }

// console.log(primeiraDose())
    
//enfim acho que entendi com a explicação 


// // // LOOP+CONDICIONAL

// // // Exercício 6 -------------------------------------------------------------------------------------


//     const segundaDose = (pessoaVacinada) => { // aqui recebeu um parametro
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
//   for (let usuario of usuarios){ // let criando a variavel e ela esta criando a interação 
//     if(usuario.nome === pessoaVacinada){
//             usuario.imunizacao = "completa"

//     }  

//   }
//     return usuarios
// }

//   // console.log(segundaDose("Barbara"))


// // // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//    //quero só uma informação, quero andar por um array, não quero criar 
//    for (let usuario of usuarios) {
//       if(usuario.imunizacao === "incompleta"){
//         console.log(`Olá ${usuario.nome}! Sua imunização está ${usuario.imunizacao}, por favor, volte ao postinho para tomar a segunda dose`)
//       }

//    }
//   }
// console.log(avisoAosAtrasados());


// // // DESAFIO------------------------------------------------------------------------------------------

// // const usuarios = [
// //     {
// //         nome: "Artur",
// //         ano: 2000,
// //         nacionalidae: "brasileiro",
// //         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastro = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastro());

// const login = () => {
//     //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());