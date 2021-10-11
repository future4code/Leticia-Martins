// EXERCICIOD DE INTERPRETAÇÃO DE CÓDIGOS

// EXERCICIO 1 <--------------------------------------------------------------->

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//RESPOSTA:  "Matheus Nachtergaele","Selton Mello", "Globo", horario: "14h"

// EXERCICIO 2<--------------------------------------------------------------->

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// RESPOSTA A - "Juba", "Jubo"
// RESPOSTA B - spread, espalhamento, faz uma cópia de um objeto inteiro

// EXERCICIO 3<--------------------------------------------------------------->

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// RESPOSTA A - "backender", undefined
// RESPOSTA B -   a chave altura não foi definida

// EXERCICIOD DE ESCRITA DE CÓDIGOS

// EXERCICIO 1 <--------------------------------------------------------------->

// 1. a) Crie um objeto. 
//Ele deve conter duas propriedades: nome (string) 
// e apelidos (um array que sempre terá exatamente três apelidos). 
// Depois escreva uma função que recebe como entrada um objeto e 
// imprime uma mensagem no modelo abaixo: 

// Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
//  // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

// Exercicio 1a <------------------------------------------------------------>
// const pessoa = {
//     nome: "Leticia",
//     apelidos: ["Le", "Leti", "Lele"]

// }

// function imprimePessoa(objeto){

// console.log(`Eu sou ${objeto.nome}, 
// mas pode me chamar de:${objeto.apelidos[0]}, 
// ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)

// }

// Exercicio 1b <------------------------------------------------------------>
// // imprimePessoa(pessoa)

// const novaPessoa = {...pessoa, apelidos: ["Lets", "Letima", "Morena"]}

// imprimePessoa(novaPessoa)

// Exercicio 2 <------------------------------------------------------------>

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`
// - Exemplo
    
//   
//     const pessoa = {
//     	nome: "Bruno", 
//       idade: 23, 
//     	profissao: "Instrutor"
//     }
    
//     minhaFuncao(pessoa)
    
//     // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
//     ```

// const pessoa = {
//     nome:"Leticia",
//     idade:47,
//     profissao:"Dev"
// }

// function imprimeInformacoes(arrayPessoa){
//     return [arrayPessoa.nome, 
//         arrayPessoa.nome.length, 
//         arrayPessoa.idade,
//         arrayPessoa.profissao, 
//         arrayPessoa.profissao.length]

// }

// console.log (imprimeInformacoes(pessoa))
