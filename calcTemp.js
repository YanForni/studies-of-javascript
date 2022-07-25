//Solução para formato ('medida',graus)
function calcTemp(temperature, temperatureValue) {
    let temperatureNewValue = 0
    if (temperature == 'Celsius' || temperature == 'celsius') {
        temperatureNewValue = (temperatureValue - 32) * (5/9)
        return `O valor convertido é: ${temperatureNewValue} F°`
    } else if (temperature == 'Fahranheit' || temperature == 'fahrenheit') {
        temperatureNewValue = (temperatureValue * (9/5)) + 32
        return `O valor convertido é: ${temperatureNewValue} C°`
    } else {
        return `Está não é uma unidade de medida válida.` 
    }
}

//Solução para formato 'grausmedida'
function calculateTemp(temperature) {
    let degreeNumber 
    let celsius = temperature.toUpperCase().includes('C')
    let fahrenheit = temperature.toUpperCase().includes('F')
    let degree = 0
    if (celsius === true) {
        degreeNumber = Number(temperature.toUpperCase().replace("C",""))
        degree = (degreeNumber - 32) *(5 / 9)
        return `O valor convertido é: ${degree} F°` 
    } else if (fahrenheit === true) {
        degreeNumber = Number(temperature.toUpperCase().replace("F",""))
        degree = (degreeNumber * (9/5)) +32
        return `O valor convertido é: ${degree} C°`
    } else {
        return 'Está não é uma unidade de medida válida.'
    }
}