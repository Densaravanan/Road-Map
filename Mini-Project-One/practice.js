//Roll No / Reg No :
const employees = [
    {id:1, name: "RAM", age:27, Designation:"Developer"},
    {id:2, name: "SITA", age:28, Designation:"Tester"},
    {id:3, name: "JACK", age:29, Designation:"UI/UX"},
    {id:4, name: "RAM", age:27, Designation:"Devops"},
    {id:5, name: "RAM", age:27, Designation:"Devops"},
    {id:6, name: "JOHN", age:31, Designation:"Developer"},
    {id:7, name: "JACK", age:29, Designation:"Tester"},
    {id:8, name: "JEN", age:29, Designation:"Devops"},
];
console.log(employees.filter((emp) => emp.id !=4));