// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

/*function primeiraFuncao(nome, idade){
    console.log(`Olá ${nome}, você tem ${idade} anos de idade`)
}

const argumento = primeiraFuncao("Bruno", 25)*/

// 

/*function numerofuncao (numero){
    let verificaPar = numero % 2
    let soma = numero += 10
    let multiplicacao = numero * numero


    return (`O numero ${numero} é par? ${verificaPar}. Somado com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplicacao}`)
   
}
const resultado = numerofuncao(25)
console.log(resultado)*/

/*function numerofuncao (numero){
    const verificaPar = numero % 2 === 0 
    const respostapar = verificaPar === true ? true : "Sim"
   
    const soma = numero +=10
    let multiplicacao = numero * numero


    return (`O numero ${numero} é par? ${respostapar}. Somado com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplicacao}`)
   
}
const resultado = numerofuncao(25)
console.log(resultado)*/

/*function senhaFuncao (login, senha) {

    const loginArmazenado = prompt(`Qual o seu login?`)
    const senhaArmazenada = prompt(`qual sua senha de verificação?`)
    const resposta = loginArmazenado === login && senhaArmazenada === senha
    return resposta
}
const resultado = senhaFuncao (login, senha)
console.log (resultado)*/

function senhaFuncao (login, senha){
    const loginArmazenado = "bruno"
    const senhaArmazenada = "bru123" 
    const acessoPermitido = (loginArmazenado === login && senhaArmazenada === senha)   

    return acessoPermitido
   
}

const loginRecebido = prompt (`Insira seu login:`)
const senhaRecebida = prompt (`Insira sua senha:`)
const Resultado = senhaFuncao(loginRecebido, senhaRecebida)
console.log(`Acesso Permitido`) 