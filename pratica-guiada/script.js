const nome = (nome)=>{ 
    return `Olá ${nome}`
}

console.log(nome('Douglas'))
console.log(nome('pipoca'))
console.log(nome('Lenara'))






const numerPar = (numero) =>{ 
    let verifica = numero % 2 === 0
    let soma = numero + 10
    let multiplica = soma + soma
    return `O número ${numero} é par? ${verifica}.Somado com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplica}`
}
console.log(numerPar(12))



const loginEsenha = (login, senha)=>{ 
    let loginArmazenado = 'Douglasluis508'
    let senhaArmazenada = '8647251086'
    return loginArmazenado === login && senhaArmazenada === senha

}
console.log (loginEsenha('Douglasluis508', '8647251086'))