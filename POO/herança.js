//classe pai
class Vehicle {
  wheels = 4;
  move(direction) {
    return `o veículo se moveu para: ${direction}`;
  }
  turn(direction) {
    return `o veículo se virou para: ${direction}`;
  }
}

//classe filho que herda (extends) métodos e atributos do pai
class Motocycle extends Vehicle {
  constructor() {
    super();
    this.wheels = 2;
  }
}

const moto = new Motocycle();

console.log(moto.turn("Norte"));

//nota, em javascript variáveis e objetos herdam um prototype (__proto__)
// let c=5
// console.log(c.__proto__);
