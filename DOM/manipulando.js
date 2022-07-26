//textContent
const element = document.querySelector('.one')
element.textContent += ' Olá mundo'

//innerText
element.innerText = 'Olá devs'

//innerHTML
element.innerHTML = 'Olá devs <small>!!!</small>'

//value
const elementInput = document.querySelector('input')
elementInput.value = "valor qualquer"

//setAtribute()
const elementAtribute = document.querySelector('header')
elementAtribute.setAttribute('id', 'header')

//removeAtribute()
elementAtribute.removeAttribute('id')