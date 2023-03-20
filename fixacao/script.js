// Resolva o Exercício de Fixação!

function maiorIdade (nome, anoNascimento, anoAtual){
    const idade = anoAtual - anoNascimento
    const  verificacaoIdade = idade >= 18
    const Sim = verificacaoIdade === true ? true: `Sim` // Não funcionou essa ideia
    const Não = verificacaoIdade === false? false: `Não`
    
    return `${nome} é maior de idade? ${Sim || Não}`
}

const seuNome = prompt `Qual seu Nome? `
    const anoQueNasceu = Number (prompt(`Qual seu ano de nascimento?`)) 
    let Ano2023 = 2023
console.log( maiorIdade (seuNome, anoQueNasceu, Ano2023) )
