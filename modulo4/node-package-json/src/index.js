// exercicio 1

// a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
// "Olá, (Nome)! Você tem (sua idade) anos."

const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(process.argv)

console.log(`Olá ${nome}!Você tem ${idade} anos`)

