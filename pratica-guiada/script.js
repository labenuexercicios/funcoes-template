  //Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

//function imprimirNome(nome){
  // console.log(`Olá, ${nome}`)
 // } 
  
  const imprimirNome = function(nome){
       console.log(`Olá, ${nome}`)
  }
  
  imprimirNome("Xampson")
  imprimirNome("Tirulipa")
  imprimirNome("Loki")
  
  
  function fazerOperacoes (numero) {
      const verifica = numero % 2 ===0
      const soma = numero + 10 
      const multiplica = numero * numero
  
      return`O número ${numero} é par? ${verifica}. Somado com 10 o resultado é ${soma}. Multiplicado por ele mesmo ${multiplica}.`;
  }
  


  console.log(fazerOperacoes(12))

  //------------------------

  const verificarDados = (login, senha) => {
   const loginArmazenado = "fcroscatto@gmail.com"
   const senhaArmazenada = "123456"

   return loginArmazenado === login && senhaArmazenada === senha
  }

  verificarDados("fcroscatto@gmail.com", "123456")
  console.log(verificarDados("fcroscatto@gmail.com", "123456"))
  console.log(verificarDados("fcroscatto@gmail.com", "1234536"))
 