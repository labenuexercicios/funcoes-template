// // Acompanhe a Prática 
// const digitarNome = (nome) => {
// console.log (`Olá ${nome}`)
// }
// digitarNome('Douglas')
// digitarNome('Lenara')
// digitarNome('Pipoca')

// const digitarNome2 = function (nome){
//     console.log(`Olá ${nome}`)
// }
// digitarNome2('Douglas')

// const digitarNumero = (numero) => { 
// let vericarNumeroPar = numero % 2 === 0
// let soma = numero + 10
// let multiplica = numero * numero
// return `O número ${numero} é par? ${vericarNumeroPar}.Somado com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplica}`

// }
// console.log(digitarNumero(105))
// // console.log(soma)


// const cadastro = (login, senha) =>{
//     const loginArmazenado = 'Douglas'
//     const senhaArmazenada = '123456'
//     return login === loginArmazenado && senha === senhaArmazenada
   

// // }
// console.log(cadastro('Douglas','123456'))


const maiorIdade = (nome, anoNascimento, anoAtual) => {

const nome1 = 'Douglas'
const anoNascimento1 = '1991'
let anoAtual1 = '2023'
let idade = anoAtual - anoNascimento
const verificarIdade = idade >= 18
 
return `${nome} é maior de idade? ${idade}${verificarIdade}`
}
console.log(maiorIdade('Douglas','1991','2023'))
console.log(maiorIdade('Gustavo', '2011', '2023'))