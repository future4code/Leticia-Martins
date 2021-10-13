//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO <--------------------------------------->


//EXERCICIO 1 <--------------------------------------->

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//respostas
// a) Explique o que o código faz. Qual o teste que ele realiza? 

// resposta: se o numero que o usuario digitar, o resto for igual a 0, 1o console: passou no teste
// caso contrário, 20 console: não passou no teste

// b) Para que tipos de números ele imprime no console "Passou no teste"? 

//resposta: números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?

// resposta: números impares, cujo o resto seja diferente de 0

//EXERCICIO 2 <--------------------------------------->

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//Respostas:

// a) Para que serve o código acima?

//resposta: para simplificar o código

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

//resposta: "O preço da fruta ", maçã, " é ", "R$ ", 5) /O preço da fruta, maçã, é R$ 5//

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a 
// mensagem impressa no console se retirássemos o `break` 
// que está logo acima do `default`
//  (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

//resposta: 

//EXERCICIO 3 <--------------------------------------->

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//Respostas

// a) O que a primeira linha está fazendo?

//resposta: solicita usuario digitar um primeiro número, e se o numero for
//maior que O, ele mostra no console a mensagem "Esse número passou no teste"

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

//EXERCICIOS DE ESCRITA DE CÓDIGO <--------------------------------------->


//EXERCICIO 1 <--------------------------------------->

// Faça um programa que pergunta ao usuário qual a idade dele e imprima no console 
// se ele/ela pode dirigir (apenas maiores de idade).

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// const idadeDoUsuario = Number(prompt("Digite a sua idade"))

// if (idadeDoUsuario >=18) {
//   console.log("Parabéns, você pode dirigir!")
// } else {
//   console.log("Puxa, você precisa esperar mais um pouco!")
// }

//EXERCICIO 2 <--------------------------------------->

// Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) 
// ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
// Utilize o bloco if/else

// Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
// Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

// Se o usuário digitar "V", a saída deve ser:

// ```
// "Boa Tarde!"


// const turnoEstudante = prompt("Qual o seu turno de estudo? Digite M (Matutino), V (Vespertino) ou N (Noturno)").toUpperCase()


// if(turnoEstudante === "M"){
    
//     console.log("Bom dia!")

// }else if (turnoEstudante === "V"){

//     console.log("Boa tarde!")

// } else if(turnoEstudante === "N"){
//     console.log ("Boa noite!")
// } else{
//     console.log("turno inválido")
// }


//EXERCICIO 3<--------------------------------------->
    
//Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// let turnoEstudante = prompt("Qual o seu turno de estudo? Digite M (Matutino), V (Vespertino) ou N (Noturno)").toUpperCase()

// switch (turnoEstudante) {
//     case "M":
//         console.log("Bom dia!")
//         break;
//     case "V":
//         console.log("Boa tarde!")
//         break;
//     case "N":
//         console.log("Boa noite!")
//         break;
//     default:
//         console.log("turno inválido")
//         break;
// }

//EXERCICIO 4<--------------------------------------->

// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme 
// com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. 
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir 
// e outra pergunta sobre o preço do ingresso, 
// então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, 
// imprima no console a mensagem: `"Bom filme!"`, caso contrário, imprima `"Escolha outro filme :("`

// const generoFilme = prompt("Qual o genero do filme que você deseja assistir?")
// const precoIngresso = prompt("Qual o preço do ingresso do filme que você deseja assistir?")

// if(generoFilme === "fantasia" && precoIngresso <= 15){
//     console.log("Oba,você irá assistir o seu filme de preferência e com um valor muito bom!")
// }else {
//     console.log("Puxa, escolha outro filme, por favor!")

// }

// Modifique o código do exercício 4 de escrita de código para, 
// antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar 
// (pipoca, chocolate, doces, etc) e imprima no console as mensagens 
// "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

// Exemplo
    
//     Entradas: `"fantasia"` | `"10"`
    
//     Saída:
    
//     ```
//     [prompt] Qual snack que você quer comprar?
//     ```
    
//     Entrada: `"chocolate"`
    
//     Saída:
    
//     ```
//     "Bom filme!"
//     "Aproveite o seu chocolate"
//     ```

//DESAFIOS

// const generoFilme = prompt("Qual o genero do filme que você deseja assistir?")
// const precoIngresso = prompt("Qual o preço do ingresso do filme que você deseja assistir?")

// if(generoFilme === "fantasia" && precoIngresso <= 15){
//    const lanche = prompt("Escolha um lanche!") 

// console.log("Oba,você irá assistir o seu filme de preferência e com um valor muito bom!")
// console.log (`Saborei o seu ${lanche}`)
// }else {
//     console.log("Puxa, escolha outro filme, por favor!")

// }

