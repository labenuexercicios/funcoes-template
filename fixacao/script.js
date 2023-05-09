// Resolva o Exercício de Fixação!

const verificacao = (nome, anoDeNascimento, anoAtual) => {
    let idade = anoDeNascimento - anoAtual
    let maiorDe18 = anoAtual - anoDeNascimento >= 18

    return `${nome} é maior de idade? ${maiorDe18}.`
}
    


console.log(verificacao(`Wallacy`, 1999, 2023));


// function verificacao(nome, anoDeNascimento, anoAtual) {
//     let idade = anoDeNascimento - anoAtual
//     let maiorDe18 = anoAtual - anoDeNascimento >= 18

//     return `${nome} é maior de idade? ${maiorDe18}.`
// }
    


// console.log(verificacao(`Wallacy`, 1999, 2023));


