//operadores unários
const person = {
    name: "Yan",
    age: 21
}
console.log(typeof person.age);
console.log(person);
delete person.age
console.log(person);

//operadores aritmeticos
// *, /, +, -
// >, <, >=, <=
let number1, number2
number1 = 10 
number2 = 6
//resto da divisão %
let remainder = number1 % number2
console.log(remainder);
//incremento ++, decremento --, exponencial **

//operadores de comparação
let one, two
one = 1
two = 2
console.log(one == 1 ); //true
console.log(one == '1' ); //true
console.log(two != '2'); //false

//estritamente igual ===, estritamente diferente !==
console.log(one === '1'); //false
console.log(one === 1); //true
console.log(two !== '2'); //true 

//operadores de atribuição
let x = 1
console.log(x -= 1);
console.log(x += 1);
console.log(x *= 6);
console.log(x /= 3);
console.log(x %= 2);
x = 5
console.log(x **= 5);

//operadores lógicos
// &&(and), ||(or), !(not) 
let pao = true
let queijo = true
console.log(pao && queijo);
console.log(pao || queijo);
console.log(!queijo);

//operadores condicionais
pao = true
queijo = true
const niceBreakfest = pao && queijo ? 'Café da manhã bom' : 'café ruim'
console.log(niceBreakfest);
let age = 18 
const canDrive = age >= 18 ?'Pode dirigir' : "Não pode"
console.log(canDrive);

//true == 1 && false == 0
