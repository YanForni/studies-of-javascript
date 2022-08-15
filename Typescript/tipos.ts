//declarando um número
let age: number;
age = 5;

//declarando uma string
let word: string;
word = "text";

//declarando um boolean
let trueOrFalse: boolean;
trueOrFalse = true;

//declarando arrays
//de números:
let numbers: number[];
numbers = [1, 2, 3, 4, 5, 6];
// é possível também utiliza a seginte notação:
// let numbers: Array<number>

//de strings
let names: string[];
names = ["Yan", "Guri", "Bacuri"];
// é possível também utiliza a seginte notação:
// let numbers: Array<string>


//Não é necessário deixar explícito o tipo do retorno da função
//uma função que não retorna nada é do tipo void
function voidFun(message: string): void {
  console.log(message);
}
voidFun("Está é uma função do tipo void");

//uma função com return do tipo string
function stringFun(message: string): string {
  return message;
}
console.log(stringFun("Está é uma função do tipo string"));

//uma função do com return tipo number
function sum(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}
console.log(sum(3, 5));


//função que utiliza union
function userId(id:string | number) {
  console.log(`Seu id é ${id}`);
}
userId(5)
userId("65")