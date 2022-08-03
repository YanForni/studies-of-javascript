//Função Independente
//Deverá retornar algo, além de ter pelo menos um argumento
//seus dados internos são imutáveis e não gurada estado, ou seja, não altera a área exterior do código
//não faz uso de loops(for, while), se necessário será feito através recursão

const factorial = (x) => {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
};

// console.log(factorial(5));

//neste caso a dependência exterior é passada como argumento
const random = (number, Math) => {
  Math.floor(Math.random() * number);
};

// console.log(random(5, Math));

//Funções Puras
//Não deverá depender de dados extenos, exceto pelos passados como argumentos
//não deverá sofrer interferências exteriores
//se os argumentos passados forem os mesmos, o retorno não poderá ser diferente quando a função for chamada novamente
//não terá efeitos colaterais no código, não irá modificar dados nem guardar estados

//Exemplos de funções impuras
//depende de dado externo que não foi passado como parâmetro
function circumference(radius) {
  return Math.PI * radius ** 2;
}

// console.log(circumference(2));

//altera dado externo
let person = {
  name: "leleco",
  age: "51",
};
function changeName(name) {
  person.name = name;
}

// console.log(person.name);
// console.log(changeName('pereira'));
// console.log(person.name);

//Função Pura
const calcCircumference = (pi, radius) => {
  return pi * radius ** 2;
};

// console.log(calcCircumference(Math.PI, 2));

const nameChanger = (person, name) => {
  return (newPerson = {
    ...person,
    name: name,
  });
};

// console.log(person.name);
// console.log(nameChanger(person, "siqueira"));

//First-Class Function
//pode ser utilizada em qualquer lugar, inclusive pode ser passada como parâmetro de outras funções
//a função poderá ser entendida como variável

const sayMyName = () => {
  console.log("Yan");
};
const runFunction = (func) => {
  func();
};

// runFunction(sayMyName);

//Higher-order Function
//funções que recebem funções como argumento
//funções que podem retornar outras funções

const someNumbers = [2, 4, 6, 8];
const square = (x) => x ** 2;

const squaredNumbers = someNumbers.map(square);

// console.log(squaredNumbers);

//Exemplo de retorno de função
//(currying ou aplicação parcial de função)
const pause = (wait) => (fn) => setTimeout(fn, wait);

//o trecho abaixo retornará o conteúdo de console.log após wait200
// pause(600)( () => console.log('waiting 600ms'))

const wait200 = pause(200);
const wait1000 = pause(1000);

//a função abaixo retornará 'waiting 200ms' antes da função pause(600)
// wait200( () => console.log('waiting 200ms'))

//último retorno parcial
// wait1000( () => console.log('waiting 1s'))

//Composição de funções
//um encadeamento de funções

const people = ["Rafa", "Diego", "Dani", "Rod"];
const upperCasePeopleThatStartWithD = people
  .filter((person) => person.startsWith("D"))
  .map((dperson) => dperson.toUpperCase());

console.log(upperCasePeopleThatStartWithD);