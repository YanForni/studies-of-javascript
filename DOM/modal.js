const invisible = document.querySelector('div')
const button = document.querySelector('button')

function remover() {
    invisible.classList.remove('invisible')
}
function adder() {
    invisible.classList.add('invisible')
}
button.onclick = remover

document.addEventListener('keydown', function(event){
    const esc = event.key === 'Escape'
    if (esc == true){
        adder()
    }
})