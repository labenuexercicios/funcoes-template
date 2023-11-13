// Acompanhe a Prática 

//======================= EX1 Parte 1
function olaPessoa(nome) {
    const nome1 = nome;
    console.log(`Olá, ${nome1}`);
}
//======================= EX1  Parte 2
olaPessoa("Luiz");
olaPessoa("Fernando");
olaPessoa("Forte");

//======================= EX1  Parte 3
const olaMundo = function(nome){
    console.log(`Olá, ${nome}`);
}

olaMundo("Luizzzzz");
olaMundo("Fernandoooooo");
olaMundo("Forteeeeee");

//=======================extra
const olaExtra = (nome)=> {
    console.log(`Olá, ${nome}`);
}

olaExtra("LLLLLuiz");
olaExtra("FFFFFernando");
olaExtra("FFFFForte");

//======================= EX2 Parte 1
function numero(num){
    const par = (num % 2);
    const soma = (num + 10);
    const multiplicado = (num * num);
    console.log(`O número ${num} é par? ${num===0}.\n Somado com 10 é igual a ${soma}\n e multiplicado por ele mesmo é ${multiplicado}`)
}

numero(5);

//======================= EX2 Parte 2
const numeros = function numero(num){
    const par1 = (num % 2);
    const soma1 = (num + 10);
    const multiplicado1 = (num * num);
    console.log(`O número ${num1} é par? ${num1===0}.\n
     Somado com 10 é igual a ${soma1}\n
      e multiplicado por ele mesmo é ${multiplicado1}`);
}

numero(10);

//======================= EX2 Parte 1
 function verificaLogin(login, senha){
    const loginAmazenado = "astrodev";
    const senhaAmazenada = "bananinha123";
    console.log(`Login e Senhas ${((loginAmazenado===login)&&(senhaAmazenada===senha))}`);
 }
//======================= EX2 Parte 2
const verLogin = (login, senha) =>{
    const loginAmazenado = "astrodev";
    const senhaAmazenada = "bananinha123";
    console.log(`Login e Senhas ${((loginAmazenado===login)&&(senhaAmazenada===senha))}`);  
}

verificaLogin("astrodev", "bananinha123");
verLogin("astrodev", "bananinha123");

 //======================= EX2 extra
 const login = prompt("Digite seu login: ");
 const pass = prompt("Digite su senha:");
 verificaLogin(login, pass);