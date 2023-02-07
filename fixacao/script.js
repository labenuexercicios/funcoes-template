// Resolva o Exercício de Fixação!

function verificaMaioridade (nome, anoNascimento, anoAtual) {
    const compara = (anoAtual - anoNascimento) >= 18
    const frase = `${nome} é maior de idade? ${compara}`

    return frase
}

console.log(verificaMaioridade("Eduarda", 1994, 2023))
console.log(verificaMaioridade("Valentina", 2010, 2023))
