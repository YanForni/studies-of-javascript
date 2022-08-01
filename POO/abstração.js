class Screw {
    constructor(){
        if (this.constructor === Screw)
        throw new Error('Classe abstrata não pode ser instânciada.')
    }

    get type(){
        throw new Error('Método "get type()" precisa ser implementado.')
    }
}

class Screwdriver extends Screw {
    constructor() {
        super()
    }

    get type() {
        return 'Fenda'
    }
}

class Philips extends Screw {
    constructor() {
        super()
    }

    get type() {
        return 'Philips'
    }
}

class Allen extends Screw {
}

// new Screw() 'Classe abstrata não pode ser instânciada.'
let fenda = new Screwdriver()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.type, philips.type)
// console.log(allen.type); 'Método get type() precisa ser implementado.'