class Athlete {
  weight;
  category;

  constructor(weight) {
    this.weight = weight;
  }

  defineCategory() {
    if (this.weight <= 50) {
      this.category = "Infantil";
    } else if (this.weight <= 65) {
      this.category = "Juvenil";
    } else {
      this.category = "Adulto";
    }
  }
}

class Fighter extends Athlete {
  constructor(weight) {
    super(weight);
  }

  defineCategory() {
    if (this.weight <= 50) {
      this.category = "Pluma";
    } else if (this.weight <= 60) {
      this.category = "Leve";
    } else if (this.weight <= 75) {
      this.category = "Meio-leve";
    } else {
      this.category = "Pesado";
    }
  }
}

const junin = new Fighter(69)
junin.defineCategory()
console.log(junin)