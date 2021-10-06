// Exercicios de interpretação de códigos

// exercicio 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

//resultado - a) false b)false c)false d)boolean

//exercicio 2 e 3

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// resposta 2 e 3 - eu preciso converter para numeros, ou serão considerados string e ele junta mas não soma,abaixo
//sugestão de melhoria no código

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = (Number(primeiroNumero) + Number(segundoNumero))

// console.log(soma)

// Exercicios de escrita de código

// exercicio 1

// a) Pergunte a idade do usuário

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", 
//seguido pela resposta (`true` ou `false`)

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)


// const minhaIdade = prompt("Qual  a sua idade?")
// const idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?")

// console.log(minhaIdade)
// console.log(idadeMelhorAmigo)
// const comparaIdade = minhaIdade > idadeMelhorAmigo

// console.log(typeof minhaIdade, typeof idadeMelhorAmigo)

// console.log("Sua idade é maior do que a do seu mehor amigo?", comparaIdade )

// const diferencaIdade = minhaIdade - idadeMelhorAmigo
// console.log("Qual a diferença de idade?", diferencaIdade)

//Exercicio 2

// a) Peça ao usuário que insira um número **par**

// b) Imprima na console **o resto da divisão** desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

// const numeroPar=prompt("Digite um numero par")

// const restoDivisao = numeroPar % 2

// console.log("o resto da divisão é", restoDivisao)

// o padrão sempre é zero, ou seja não existe resto de divisão e confirma que os numeros inseridos são pares

// ele mostra 1

//faltou fazer o exercicio 3 e 4 escrita de código

