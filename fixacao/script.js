// Resolva o Exercício de Fixação!

function verificarMaiorIdade(nome , anoDeNascimento , anoAtual){

const idade = anoAtual - anoDeNascimento

const ehMaior = idade >= 18

const frase = `${nome} e maior de idade? ${ehMaior}`

return frase
}

const pessoa1 = verificarMaiorIdade(`Mario`, 1993, 2023)
console.log(pessoa1)

const pessoa2 = verificarMaiorIdade(`Iago`, 1993, 2023)
console.log(pessoa2)

const pessoa3 = verificarMaiorIdade(`Felipe`, 1991, 2023)
console.log(pessoa3)

const pessoa4 = verificarMaiorIdade(`Gabriel`, 2010, 2023)
console.log(pessoa4)
