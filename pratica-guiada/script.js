// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

// Prática guiada I
//let nome = prompt("Digite seu nome")
function darOlaPessoa(nome) {
    const frase = `Olá, ${nome}!`
    console.log(frase)
}

// darOlaPessoa(nome)
// darOlaPessoa("Nicholas")
// darOlaPessoa("Easley")

//declarando a mesma função, só que não-nomeada
const darOlaPessoaExtra = function(nome) {
    const frase = `Olá, ${nome}!`
    console.log(frase)
}

// darOlaPessoa("Beatriz")
// darOlaPessoa("Nicholas")
// darOlaPessoa("Easley")


// Prática guiada II
function operarNumero(numero) {
    // verifica paridade
    const par = numero % 2 === 0

    //soma com 10
    const soma = numero + 10

    //multiplica
    const multiplica = numero * numero // ou numero **2

    //frase retornada
    const frase = `O número ${numero} é par? ${par}. Somado com 1O, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplica}`
    
    return frase 
}

// console.log(operarNumero(4))
// console.log(operarNumero(10))
// console.log(operarNumero(7))

//Prática guiada III
let login = prompt("Digite seu login")
let senha = prompt("Digite sua senha")
function verificarLoginESenha (login, senha) {
    const loginArmazenado = "beatriz-mozer"
    const senhaArmazenada = "123abc"

    //verifica se login e senha são iguais
    const comparaLogin = login === loginArmazenado
    const comparaSenha = senha === senhaArmazenada

    const verificaInfos = comparaLogin && comparaSenha
    const frase = `As informações de login estão corretas? ${verificaInfos}`
    return frase
}

console.log(verificarLoginESenha(login, senha))

//declarando a mesma função, só que não-nomeada

const verificarLoginESenhaExtra = function(login, senha) {
    const loginArmazenado = "beatriz-mozer"
    const senhaArmazenada = "123abc"

    //verifica se login e senha são iguais
    const comparaLogin = login === loginArmazenado
    const comparaSenha = senha === senhaArmazenada

    const verificaInfos = comparaLogin && comparaSenha
    const frase = `As informações de login estão corretas? ${verificaInfos}`
    return frase
}

console.log(verificarLoginESenha(login, senha))