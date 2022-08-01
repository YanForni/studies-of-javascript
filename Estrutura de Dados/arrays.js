const pilotos = ["Senna", "Prost", "Schumacher", "Hamilton"];

console.log(pilotos[0]); //Senna
console.log(pilotos[3]); //Hamilton

console.log(pilotos.length); //4

for (let piloto of pilotos) {
    console.log(piloto);
}

//adiciona elemento
pilotos.push('Alonso')
console.log(pilotos);

//encontra elemento
const senna = pilotos.find(piloto => piloto ==='Senna')
console.log(senna);

//removendo um elemento
pilotos.splice(0,1)
console.log(pilotos);