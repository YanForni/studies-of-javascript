//for 
//podemos parar o laço de repetição usando break,ou pula-lo usando continue
for (let i = 0; i < 10; i++) {
    if(i===5) {
        continue;
    }
    console.log(i);
    if (i===9) {
        break;
    }
    
}

//while, geralmente usado quando não sabemos quando a função irá parar
let i = 454646546
while (i>10) {
    console.log(i);
    i /=40
}

//for...of útil para verificar os itens de um array 
let name = 'Yan'
let names = ['João', 'Fulano', 'Ciclano']
for (let name of names) {
    console.log(name);
}

//for...in útil para ver as propriedades de um objeto
let person = {
    name: 'Yan',
    age: 21,
    weight: 55,
}
for (const property in person) {
    console.log(property);
}