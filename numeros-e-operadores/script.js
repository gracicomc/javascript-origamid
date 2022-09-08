var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
var exp = 2e-2; // 0.02

//OPERADORES ARITMÉTICOS:
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4 (resto)

//OPERADORES ARITMÉTICOS EM STRINGS:
var soma = '100' + 50; // 10050 e continua sendo uma string
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

//PARTE 2
//Incremento
var x = 5;
console.log(x++); // 5
console.log(x); //6 (x = x + 1)

//Decremento
var x = 5;
console.log(x++); // 5
console.log(x); //4 (x = x - 1)

//OPERADORES UNÁRIOS
//O + e - tenta transformar o valor seguinte em número
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 (transformou a string em número para somar e não concatenar)

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

//O - antes de um número torna ele negativo

//EXERCÍCIO
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35

// Crie duas expressões que retornem NaN
var frase = 'dasda' - 10
console.log(frase)

// Somar a string '200' com o número 50 e retornar 250
var string = +'200' + 50;
console.log(string)

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(numero);


