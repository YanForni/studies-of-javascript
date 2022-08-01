//Estrutural
let heightE = 50;
let widthE = 50;

function calculateAreaE() {
  return heightE * widthE;
}

let area = calculateAreaE();

//Orientada a objetos
class Poligon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  getArea() {
    return this.#calculateArea()
  }

  #calculateArea() {
    return this.height * this.width
  }
}

//para criar o Objeto
let poligon = new Poligon(50,50)
console.log(poligon);
console.log(poligon.getArea());