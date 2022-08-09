//Uma promise é um objeto javascript com a promessa de que algo será realizado
//irá acontecer, com ou sem erro
//ex: operações assíncronas, como carregar um arquivo ou leitura de dados de uma api

console.log('Pedindo Uber');

let accept = true

//momento em que a promessa é criada (pending)
const promise = new Promise((resolve, reject) => {
    if (accept) {
        return resolve('O carro chegou')
    } 
    return reject('Pedido negado')
})

console.log('Aguardando');  

promise
    //usado para retornar sem erro (fulfilled)
    .then(result => console.log(result))
    //usado para retornar com erro (rejected)
    .catch(erro => console.log(erro))
    //promessa finalizada (settled) 
    .finally(() => console.log('Finalizada'))

