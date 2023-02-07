// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

//                        PRATICA GUIADA 1

//  function darOlaPessoa(nome){
//      const frase = ola, ${nome}!
//      console.log (frase)
//  }

// // darOlaPessoa(Iago)

// //    DECLARANDO A MESMA FUNCAO, SO QUE NAO NOMEADA

//  const darOlaPessoaExtra = function(nome){
//      const frase = ola, ${nome}!
//      console.log (frase)
//  }

// // darOlaPessoa(fulano)
// // darOlaPessoa(beltrano)
// // darOlaPessoa(ciclano)

// //                         PRATICA GUIADA 2


// function operarNumero(numero){
// // verifica paridade
// const ehPar = numero % 2  === 0

// // soma com 10 
// const soma = numero + 10

// // multiplica por ele mesmo 
// const multiplica = numero * numero 

// // frase retornada 
// const frase = O número ${numero} é par? ${ehPar}. Somado com 1O, o resultado é ${soma} e multiplicado por ele mesmo o resultado é  ${multiplica}

// return frase
// }

// console.log (operarNumero(4))
// console.log (operarNumero(5))
// console.log (operarNumero(12))

// PRATICA GUIADA 3

function VerificarLoginESenha (login , senha){
    const loginArmazenado = `mario-carneiro`
    const senhaArmazenada = `abc123`

// VERIFICAR SE LOGIN É IGUAL
// SE FOREM IGUAL 

const compararLogin = login === loginArmazenado

// VERIFICA SE SENHA SAO IGUAIS

const compararSenha = senha === senhaArmazenada

// VERIFICAR SE AMBOS SAO TRUE

const verificarInfos = compararLogin && compararSenha

// FRASE RESULTADO

const frase = `As informacoes de login e senha estao corretas ${verificarInfos}`
return frase
}

console.log(VerificarLoginESenha(`mario-carneiro`),`abc123`)