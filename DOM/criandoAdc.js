
//createElement
const div = document.createElement('div');
div.innerText = 'Olá devs'
const nav = document.createElement('nav')
nav.innerText = 'Olá mundo'
const body = document.querySelector('body')

//prepped append
body.append(div)
body.prepend(nav)

//insertBefore
const divTwo = document.createElement('div')
divTwo.innerText = 'Olá vscode'
const script = document.querySelector('script')
body.insertBefore(divTwo, script)