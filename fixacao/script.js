// Resolva o Exercício de Fixação!

const verificarDados = (nome, anoNascimento, anoAtual) => {
    const anoNascimentoArmazenado =2015
    const anoAtualArmazenado = 2023
    const maioridade = anoAtualArmazenado - anoNascimento >=18
    return`${nome} é maior de idade? ${maioridade}`
}
 console.log(verificarDados("Fabrício", 1991, 2023))
 console.log(verificarDados("João Pedro", 2020, 2023))

    
 