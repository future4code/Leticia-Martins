// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGOS

//Exercicio 1 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//resposta: { nome: "Amanda Rangel", apelido: "Mandi" }, 0
//           { nome: "Laís Petra", apelido: "Laura" }, 1
   //        { nome: "Letícia Chijo", apelido: "Chijo" }2

   //retorna os três parâmetros e mais qual o indice


  //Exercicio 2<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  // resposta: retorna os nomes 
  // "Amanda Rangel", "Laís Petra", "Letícia Chijo"

   //Exercicio 3<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//    const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//    // resposta: retorna os apelidos que são diferentes de "Chijo", "Mandi","Laura"

// EXERCICIOS DE ESCRITA DE CÓDIGOS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

 //Exercicio 1<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a) Crie um novo array que contenha apenas o nome dos doguinhos
  //Resultado esperado:
 // item A
// [
//     "Lupin", 
//     "Polly",
//     "Madame",
//     "Quentinho", 
//     "Fluffy", 
//     "Caramelo"
//   ]

//a) Crie um novo array que contenha apenas o nome dos doguinhos

// const nomeDoguinhos = pets.map((pets)=>{
//     return pets.nome

// })

// console.log (nomeDoguinhos)

//b) Crie um novo array apenas com os cachorros salsicha

// item B
// [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Quentinho", raca: "Salsicha"}
//  ]
 
const doguinhosSalsicha = pets.filter((pets) =>{
    return pets.raca === "Salsicha"

})

console.log (doguinhosSalsicha)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

// item C
// [
//     "Você ganhou um cupom de desconto de 10% para tosar o/a Madame!"
//     "Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!"
//   ]

const poodles = pets.filter((cachorro) =>{
return cachorro.raca === "Poodle"

})

const cuponsPoodle = poodles.map ((poodle)=>{
return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome} `

})
console.log (cuponsPoodle)