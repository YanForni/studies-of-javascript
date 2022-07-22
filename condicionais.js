//ifs e elses
let temperature = 38
//podemos criar variaveis com booleanos
let highTemperature = (temperature>=37.5)
let mediumTemperature = (temperature<=37.5 && temperature>=37)
if (highTemperature) {
    console.log('Febre');
} else if (mediumTemperature) {
    console.log('Febre moderada');    
} else {
    console.log('Saudável');
}

//switch case
function calculator(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2;        
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
        default:
            console.log('Está não é um operação válida');
            break;
    }
    return result;
}


//throw, try & catch
function sayMyName(name = '') {
    if (name === '') {
        throw 'Este não é um nome válido'
    }
    console.log('logo após o erro');
}

try {sayMyName()
} catch (erro) {
    console.log(erro);
}