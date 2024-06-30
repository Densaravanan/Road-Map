// const numbersNew = [1,2,3,4,5];

// const [first,second,...others] = numbersNew;

// console.log(first);
// console.log(second);
// console.log(others);

const num = [1,2,3,4,5];
const [first,second, , ,fifth] = num;

console.log(first);
console.log(second);
console.log(fifth);

const person = {name: "Sarvan", age: 33};
const {name,age} = person;

console.log(_name);
console.log(age);

const employees = [
    {
        name: "name1",
        age: 22,
        email: "1@gmail.com",
        dept: "Sales"
    },
    { name: "name2",
        age:25,
        email: "2@gmail.com",
        dept: "lVGAnimatedLengthList",
    },
    {
        name: "name3",
        age: 23,
        email: "2@gmail.com",
        dept: "kGAnimatedLengthList"}
];

function createEmplayees(emplayees) {
    const reports = [];
    for(i = 0; i < employees[i].length; i++) {
        const report = name:${employees.name}, age:${employees.age}, dept:${employees.dept}, email${employees.email};        
    };
    return reports;
}
const reports = createEmplayees(employees);
console.log(employees);