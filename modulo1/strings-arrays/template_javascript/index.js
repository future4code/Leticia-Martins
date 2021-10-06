//Exercicios de interpretação de códigos
// exercicio 1 <----------------------------------------------------------->

// Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
// let array
// console.log('a. ', array)
// // resposta - eu não declarei valores, 
// //estão indefinidos, imprime = undefined
// array = null
// console.log('b. ', array)
// //resposta - declarei como null, imprime  = null
// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// //resposta - imprime o tamanho do array : 11
// let i = 0
// console.log('d. ', array[i])
// //resposta - 3
// array[i+1] = 19
// console.log('e. ', array)
// //resposta - [3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// // apartir do indice 0, na posição 1 incluir o 19
// const valor = array[i+6]
// console.log('f. ', valor)
// //resposta - 9

// exercicio 2 <----------------------------------------------------------->

//Qual será o valor impresso no console se a entrada do usuário for: 
//"Subi num ônibus em Marrocos"?

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//resposta = SUBI NUM ÔNIBUS EM MARROCOS,
// SUBI NUM ÔNIBUS EM MIRROCOS  27

// EXERCICIO DE ESCRITA DE CÓDIGO<----------------------------------------------------------->

// exercicio 1 <----------------------------------------------------------->

// Faça um programa que pergunte ao usuário seu nome e seu e-mail. 

// const nomeDoUsuario = prompt("Digite seu nome")
// const emailDoUsuario = prompt("Digite seu email")

// // Em seguida, Imprima no console a seguinte mensagem:
// //O e-mail emailDoUsuario foi cadastrado com sucesso.
// // Seja bem-vinda(o), nomeDoUsuario!

// console.log(`O email: ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)

// exercicio 2 <----------------------------------------------------------->

//Faça um programa que contenha um array com 5 das suas comidas preferidas, 
//armazenado em uma variável. Em seguida, siga os passos:

// const comidasPreferidas = ["batata-frita", "strogonoff", "pastel", "pizza", "ovo"]

// // a) Imprima no // console o array completo
// console.log (comidasPreferidas)



// // b) Imprima no console a mensagem "Essas são as minhas comidas preferida
// // seguida por cada uma das comidas, **uma embaixo da outra**.
// console.log(`Essas são as minhas comidas preferidas: ${comidasPreferidas}`)
// // console.log(`Essas são as minhas comidas preferidas:`)
// // console.log(comidasPreferidas[0])
// // console.log(comidasPreferidas[1])
// // console.log(comidasPreferidas[2])
// // console.log(comidasPreferidas[3])
// // console.log(comidasPreferidas[4])

// // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 

// const comidaPreferidaUsuario = prompt("Qual  sua comida preferida?")
// console.log (comidaPreferidaUsuario)



// Troque a segunda comida da sua lista pela inserida pelo usuário. 
//Imprima no consolea nova lista


// exercicio 3 <----------------------------------------------------------->

// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

const listaDeTarefas;


// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, 
// uma por uma, no array

const primeiraTarefa = prompt("Qual a sua primeira tarefa do dia?");
const segundaTarefa = prompt ("Qual a sua segunda tarefa do dia?")
const terceiraTarefa = prompt("Qual a sua terceira tarefa do dia?")

// c) Imprima o array no console

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já 
// realizou: 0, 1 ou 2 

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array no console