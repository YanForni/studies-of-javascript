//let weight
//console.log(typeof weight)

const student = {
    
    name: "Yan",
    age: 21,
    weight: 55,
    stars: 5.3,
    isSub: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg`);

let students = []

students = [
    student
]

console.log(students[0]);

const john = {
    name: "john",
    age: 20,
    weight: 70,
    stars: 7.1,
    isSub: false
}

students[1] = john