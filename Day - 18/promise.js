let promiseObj = new Promise((resolve, reject) => {
    // producer code
    console.log("Getting the Name from Database.");
    setTimeout(() => {
        resolve("Mani Anbu");
        reject("No Data!!!");
    },2000);
});

// Consumer Code
promiseObj.then(
    (val) => {
    console.log(`Name received from DataBase = ${val}.`);
},
(err) => {
    console.log(`Error occured = ${err}!!!`);
}
);