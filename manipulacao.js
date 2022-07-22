//type conversion
console.log(Number('9') + 5);
console.log('9' + String(5));

//quantos fdigitos tem um número
console.log(String(5465456463).length);

//ajustando quantidade de casas decimais (n.toFixed(n° casas decimais))
//usando replace(".", ",") podemos trocar ponto por virgula
let number = 4654654.5464654
console.log(number.toFixed(2).replace(".", ","));

//toUpperCase
let word = "palavra";
console.log(word.toUpperCase());
//toLowerCase
console.log(word.toLowerCase());

//verificar se há uma palavra especifica na frase
let phrase = "está é uma frase"
console.log(phrase.includes('frase'));

//separando palavras e trocando " " por _
let text = "este é um texto"
let array = text.split(" ")
console.log(array);
let textWithUnderscore = array.join("_")
console.log(textWithUnderscore);

//podemos criar um array vazio
let arrayNull = Array(10)

//criando um array usando uma palavra 
console.log(Array.from(word));

//===================================================================================================

//Manipulando Array
 let techs = ["html", "css", "js"]

//adicionando um item no final
techs.push("nodejs")
//adicionando um item no começo
techs.unshift("sql")
//remover item final
techs.pop()
//remover item inicial
techs.shift()
/*
remover alguns elementos
console.log(techs.slice(1, 3))
*/
/*
remover um ou mais itens de qualquer posição
console.log(techs.splice(1, 2));
*/
//encontrar a posição de um elemento
let index = techs.indexOf('js')
console.log(index);
console.log(techs);
//podemos remover o elemento de index da seguinte forma: console.log(techs.slice(index, 1))