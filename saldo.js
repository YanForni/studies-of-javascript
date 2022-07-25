let family = {
    incomes: [0, 700, 800, 900], 
    expenses: [500, 800, 500, 600]
}

function sumArray(array) {
    let total = 0;
    for (const value of array) {
        total += value;
        //console.log(total);
    }
    return total
}

function balance() {
    let calcIncomes = sumArray(family.incomes)
    let calcExpenses = sumArray(family.expenses)
    let balance = calcIncomes - calcExpenses
    console.log(balance);
    if (balance >= 0) {
        console.log(`Saldo positivo, seu saldo é: R$ ${balance}`);
    } else {
        console.log(`Saldo negativo, seu saldo é: R$ ${balance}`);
    }
}