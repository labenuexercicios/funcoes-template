// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!
/*
function olaPessoa(nome){
    const frase = `Ola, ${nome}`
    console.log(frase)
}

olaPessoa("Osmar")
olaPessoa("Henrique")
olaPessoa("Vilela")


// função não nomeada

const olaPessoaExtra = function(nome){
    const frase = `Ola, ${nome}`
    console.log(frase)
}

olaPessoaExtra("Osmar2")
*/

// EXERCICIO 2
/*
function operacoes(numero){
    // verifica paridade
    const ePar = numero % 2 === 0
    // soma com 10
    const soma = numero + 10
    // multiplica por ele mesmo
    const multiplica = numero * numero
// frase retornada
const frase = `O número ${numero} é par? ${ePar}. 
Somado com 1O, o resultado é ${soma} 
e multiplicado por ele mesmo 
o resultado é  ${multiplica}`
return frase

}

console.log(operacoes(10))
*/

//EXERCICIO 3

function verificaLoginSenha(login, senha){
    const loginArmazenado = "Osmar"
    const senhaArmazenada = "Osmar123"
// verificação do login 
    const verificaLogin = login === loginArmazenado
// verificação senha
    const verificaSenha = senha === senhaArmazenada
// verifica se estão corretas
    const verificaInfos = verificaLogin && verificaSenha

// frase resultado
    const frase = `As informações de login estão corretas? ${verificaInfos}
    `
    return frase

}

console.log(verificaLoginSenha ("Osmar", "Osmar123"))
console.log(verificaLoginSenha ("henrique", "Osmar123"))



// EXERCICIO 4
/*
function nomeNascAno(nome, nascimento, ano){
    const adulto = (ano - nascimento) >= 18
const frase = `${nome} é maior de idade? ${adulto}`

return frase
}
console.log(nomeNascAno("Osmar", 1989, 2023))
*/