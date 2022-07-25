//adicionando evento através do html*
function print() {
    console.log('print');
}


//eventos de teclado
//onkeydown onkeyup
const input = document.querySelector('input')
//quando alguma tecla é pressionada
input.onkeypress = function(){
    console.log('rodou');
}
// //quando alguma tecla é pressionada
// input.onkeydown = function() {
//     console.log('rodei')
// }
//quando se solta uma tecla
input.onekeyup = function () {
    console.log('rodei de novo');
}

//eventos através do js
//addEventListener é recomendado pois permite mais de um elemento por vez
const h1 =document.querySelector('h1')
h1.addEventListener('click', print)

h1.onclick = print