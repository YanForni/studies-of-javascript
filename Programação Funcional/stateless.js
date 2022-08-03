//stateful function, o retorno da função varia conforme as variáveis exrtiores variam
number = 2;

function squareI() {
  return number ** 2;
}

number = squareI();
console.log(number);

//stateless function, independente das variáveis exteriores, se utilizar outras variáveis
// o retorno de função será correspondente a variável utilizada
number = 2;

const squareD = (number) => number * number;
console.log(squareD(number));
