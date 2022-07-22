// declaramos uma variavel(var)
// escolhemos um nome (clima)
// e atribuimos (=) um valor ("quente")
var clima = "Quente"
clima = "Chuvoso"
console.log(clima)
//para descobrir o tipo de uma variável usamos a função typeof
console.log(typeof clima);

//let funciona de forma parecida com o var
let clima = "Frio"
clima = "Nublado"
console.log(clima)

//já a constante não pode ter seu valor alterado
const clima = "Ensolarado"
console.log(clima)

//var é global, ou seja, funciona fora de blocos {}
console.log("variavel x existe antes do bloco?", x)
//variavel x existe antes do bloco? undefined
{
    var x = 2
}
console.log("variavel x existe depois do bloco?", x)
//variavel x existe depois   do bloco? 2
//se tentarmos o mesmo com let teremos um erro

//const e let são locais, ou seja, funcionam apenas no bloco em que foram declarados
{
    let x = 2
    const y = 1
    console.log(x, y)
}

//é possível declarar várias variáveis ao mesmo tempo
let clima, vaiChover, mes

clima = "Ensolarado"
mes = "julho"
vaiChover = false

//e também imprimi-las
console.log(clima, ano, vaiChover)
console.log('Este mês, ' + mes + ', está' + clima + 'vai chover?' + vaiChover)

//outra forma de concatenar strings e variáveis
console.log(`Este mês, ${mes}, está ${clima} vai chover? ${vaiChover} `);

//imprimindo apenas uma propriedade de um objeto
const pessoa = {
    nome: "Yan",
    idade: 21,
}

console.log(pessoa.nome);

//imprimindo um elemento do array
const lista = [
    "Banana",
    "Maçã",
    "Alface"
]

console.log(lista[1]);
//podemos usar a função length para saber o tamanho do array
console.log(lista.length);

//se tivermos um objeto dentro de um array, podemos acessar suas propriedades
const doces = [
    "Chocolate",
    {
        tipo: "doce",
        quantidade: 24
    }
]

console.log(doces[1].quantidade);
