//parentNode e parentElement
const body = document.querySelector('body');
console.log(body.parentNode);
console.log(body.parentElement);

//childNode, firstElementChild, lastElementChild
console.log(body.firstElementChild);
console.log(body.lastElementChild);
console.log(body.childNode);

//firstchild, lastchild
console.log(body.firstChild);
console.log(body.lastChild);

//nextElementSibling, previousElementSibling
const header = document.querySelector('header');
console.log(header.nextElementSibling);
console.log(header.previousElementSibling);