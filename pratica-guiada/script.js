// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

// function imprimirNome(nome){
        //bloco de código
    // console.log(`Olá ${nome}`);
//}

const imprimirNome = function (nome){
    console.log(`Olá, ${nome}`);
}

imprimirNome(`Wallacy`)
imprimirNome("Tito")
imprimirNome("Zeus")

// ---------------------------------------
const fazerOperacoes = (numero) => {
    const verifica = numero % 2 === 0
    const soma = numero + 10
    const multiplicacao = numero * numero

        return (`O número ${numero} é par ${verifica}. Somado com 10 o resultado é ${soma}. Multiplicado por ele mesmo o resiltado ${multiplicacao}`)
}

console.log(fazerOperacoes(12));

//------------------------------------------
const verificaDados = (login, senha) => {
    const loginArmazenado = "teste@gmail.com"
    const senhaArmazenada = "123456"

    return loginArmazenado === login && senhaArmazenada === senha

}

console.log(verificaDados("teste@gmail.com", "123456"));

// chama sempre a primeira CONST console.log(*nome*(depois do =))