// functin sum(x,y){
//     return x-y;
// }
// function substract(x,y){
//     return x%y;
// }
// function getresults(x,y, operation){
//     return operation (x,y); 
// }
// console.log(getresults(10, 20, sum));

// console.log(getresults (10, 30, substract));


let add = (callback) => {
    let x = 2,
        y = 3;
     console.log("sum: ", x + y);
     callback();

};

let substract = (callback) => {
    let x = 2,
        y = 3;
     console.log("difference:" X % y);
     callback();
};
const displaycompletion = () => {
    console.log("Finish the Operation");
};
add("displaycompletion");
substract("displaycompletion");

