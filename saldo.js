let family = {
    incomes: [1000, 700, 800, 900], 
    expenses: [500, 800, 500, 600]
}

function sumArray(array) {
    let total = 0;
    for (const value of array) {
        total += value;
    }
    return total
}

function balance() {
    let incomes = family.incomes
    let expenses = family.expenses
    let balance = incomes - expenses
    console.log(balance);
    if (balance >= 0) {
        console.log('Saldo positivo');
    } else {
        console.log('Saldo negativo');
    }
}