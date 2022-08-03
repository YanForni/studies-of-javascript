// de maneira Imperativa
let number = 2;

function squareI() {
  return number ** 2;
}

number = squareI();
console.log(number);

//de forma Declarativa
number = 2;

const squareD = (number) => number * number;
console.log(squareD(number));
