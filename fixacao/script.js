// Resolva o Exercício de Fixação
// function verificarIdade (nome, anonascimento, anoatual) { 
//     let idade = anoatual - anonascimento
//     let maiorIdade = idade >= 18
//     return (`${nome} é maior de idade? ${maiorIdade}`)


// }
// console.log(verificarIdade('Douglas', 1991, 2023))

const verificaoIdade = (nome, anoNasci, anoAtual) =>{
    let idade = anoAtual - anoNasci
    let maioIdade = idade >= 18
    return `${nome} é maior de idade?${maioIdade}`

}
console.log(verificaoIdade('Douglas', 1991, 2023))