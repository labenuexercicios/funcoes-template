// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!


// pratica guiada 1

function darOlaPessoa(nome) {
    const frase = `olá, ${nome}!`
    //console.log(frase)
}

darOlaPessoa('gustavo')
darOlaPessoa('maria, meu amor')
darOlaPessoa('turma easley')


//declarando a mesma função nao-nomeada

const darOlaPessoaExtra = function(nome){
    const frase = `olá, ${nome}!`
    //console.log(frase)
}

darOlaPessoaExtra('gustavo')




//pratica guiada 2
function operadorNumero(numero){
    //verifica paridade
const ehPar = numero % 2 === 0

    //soma com 10
    const soma = numero + 10

    //multiplica por ele mesmo
const multiplica = numero * numero

const frase =  `o número ${numero} é par? ${ehPar}. Somado com 10 o resultado é ${soma} e multiplicado por ele mesmo é ${multiplica}`

return frase
}


//console.log(operadorNumero(4))
//console.log(operadorNumero(5))
//console.log(operadorNumero(12))



//pratica guiada 3
function verificarLoginSenha (login, senha) {
    const loginArmazenada = 'gustavo-henrique'
    const senhaArmazenada = 'tutu1234'
    
    //verificar se as informações sao iguais, se sim o valor é TRUE
    const comparaLogin = login ===loginArmazenada

    const comparaSenha = senha === senhaArmazenada

    const verificaInfos = comparaLogin && comparaSenha

    //frase de resultado
    const frase = `as informações de login estão corretas? ${verificaInfos}`

    return frase

}

console.log(verificarLoginSenha('gustavo-henrique', 'tutu1234'))
console.log(verificarLoginSenha('gustavo-pereira', '1234'))
console.log(verificarLoginSenha('maria', 'tutu1234'))




