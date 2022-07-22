
//funções sem nome são funções anônimas
//declarando uma função
function createPhrases() {
    console.log('Estudar é muito bom');
    console.log('Paciência e persistência');
    console.log('Revisão é a mãe do aprendizado');
}
//executando uma função
createPhrases()

//criando uma função com parâmetros (a, b)
function sum(a, b) {
    return(a + b);
}

let number1 = 35
let number2 = 24
console.log(`O primeiro número é ${number1}, o segundo é ${number2} e a soma é ${sum(number1,number2)}`);

//outro exemplo
function makeJuice(fruit1, fruit2){
    return 'suco de '+ fruit1 + fruit2
}

const cup = makeJuice('maçã', ' banana')
console.log(cup);


function createThink(subject) {
    return subject
}

//function hoisting
sayMyName()

function sayMyName() {
    console.log('Yan');
}

//arrow function
const nameUppercase = () => {
    console.log('YAN');
}

nameUppercase()

//callback function
function callback(func) {
    console.log('antes da callback');
    func()   
    console.log('depois da callback');
}

callback(
    () => {
        console.log('Estou em uma callback');
    }
)

//construtor
function Person(name) {
    this.name = name
    this.walk = function walk() {
        return this.name + " está andando";
    }
}
const Yan = new Person("Yan");
const Jose = new Person("Jose");
console.log(Yan.walk());
console.log(Jose.walk());
