
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
//     return `No comparador de desigualdade ${a}===${b} é ${a === b}`
// }
// console.log(checarIgualdade(1, 2));

// // // c-)Faça uma função chamada "verificaSeEMaior"

// function verificaSeEMaior(num1,num2){
//     if(num1 > num2){
//         console.log (`o ${num1} é maior que ${num2}`)
//     } else{
//         console.log(`o ${num1} é menor que ${num2}`)
//     }
// }
// console.log(verificaSeEMaior(321, 2156));

// const verificaSeEmaior = (a,b)=> {
//     return `No comparador de maior que ${a}>${b} é ${a > b}`
// }
// console.log(verificaSeEmaior("b", "a"))
// console.log(verificaSeEmaior("abobora", "abobora"))
// console.log(verificaSeEmaior("arama", "arame"))// diz que é maior por causa da ordem alfabética

// // Exercício 2------------------------------------------------------------------------------------
// //Escreva true or false para as comparações abaixo:
// // exemplo 1>2 = false
// a-) 1==='1'= // false - aqui compara tipo e valor
// b-) 1=='1'= // compara valor
// c-) 'a'==='b'= // false
// d-) 'b'>'a'= // true - compara por ordem alfabética, quem vem depois é maior
// e-) 0!==null= //true - seria false pois 0 náo tem mesmo valor que null, porém com negação fica true

// // CONDICIONAIS

// // Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
   
    const usuario = []
    const nomeDoUsuario = prompt("Digite o seu nome?")
    const anoDeNascimento = Number("Digite seu ano de nascimento?")
    const senhaDoUsuario = prompt("Digite a sua senha, ela deve ter mais de seis digitos")
    const nacionalidadeUsuario = prompt("Digite a sua nacionalidade?")

    const idadeAtual = 2021 - anoDeNascimento

    // if(idadeAtual>=18 ===        === "brasileira")

    if(idadeAtual>18 && senhaDoUsuario.length >=6 && nacionalidade === "brasileira" ){

        console.log ("usuário cadastrado com sucesso")

    }else{

        console.log("Não foi possivel cadastrar o usuário")
    }
}

//     //  Sua lógica aqui

// }
console.log(cadastro());

// // Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui

// }

// console.log(login());

// // Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui


// }
// console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui


// }
// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui

// }
// console.log(avisoAosAtrasados());


// // DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
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