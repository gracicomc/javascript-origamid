//São 7 tipos de dados:

var nome = 'Graci'; //String
var idade = 24; //Number
var possuiFaculdade = true; //Boolean
var time; //Undefined
var comida = null; //Null
var simbolo = Symbol(); //Symbol
var novoObjeto = {}; //Object

console.log(typeof idade) //mostra o tipo no console

//String:
var nome = 'José';
var sobrenome = 'Maria';
var nomeCompleto = nome + ' ' + sobrenome; //forma antiga de juntar strings
console.log(nomeCompleto)
var nomeCompleto2 = `${nome} ${sobrenome}`
console.log(nomeCompleto2) //nova forma de juntar strings com template strings

//Exercícios:
// Declare uma variável contendo uma string
var peixe = 'Tilapia';
console.log(peixe)
// Declare uma variável contendo um número dentro de uma string
var ano = '2022';
console.log(ano)
// Declare uma variável com a sua idade
var minhaIdade = 24;
console.log(minhaIdade)
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var meuNome = 'Graciela';
var meuSobrenome = 'Parente';
var meuNomeSobrenome = `${meuNome} ${meuSobrenome}`;
console.log(meuNomeSobrenome)
// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time"; //ou `It's time` ou 'It\'s time'
console.log(frase)
// Verifique o tipo da variável que contém o seu nome
console.log(typeof meuNome)