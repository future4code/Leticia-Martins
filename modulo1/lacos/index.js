//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGOS <--------------------------------------------------->

// EXERCICIO 1 <************************************************>

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// // resposta: 10

// EXERCICIO 2 <*********************************>
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//resposta a: imprime os numeros maiores que 18(19,21,23,25,27,30)

//b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? 
//Se sim, o que poderia ser usado para fazer isso?

//resposta b: duvidas

// EXERCICIO 3 <*********************************>

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// resposta: *. **, ***, ****

//Se o usuário digitar "V", a saída deve ser:
//"Boa Tarde!"




//EXERCICIOS DE ESCRITA DE CÓDIGO <----------------------------------------------->

// EXERCICIO 1<*********************************>

//Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// const bichinhosDeEstimacao = Number(prompt("Quantos bichinhos de estimação você tem?"))

// if (bichinhosDeEstimacao ===0){
//     console.log("Que pena! Você pode adotar um pet!")

// }
// // a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// // b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
// //  um por um, e guarde esses nomes em um array


// if (bichinhosDeEstimacao > 0){

//     let arrayBichinhosDeEstimação = []

//     for(let=if; i < bichinhosDeEstimacao; i++){
//     arrayBichinhosDeEstimação.push(prompt("Digite o nome de cada um deles"))

//     }
//     console.log(arrayBichinhosDeEstimação)
// }


// - 💡 Dica
    
//     Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma 
//     quantidade de vezes que o usuário inseriu. Por exemplo: s
//     e o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
    

// c) Por fim, imprima o array com os nomes dos bichinhos no console


