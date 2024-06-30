const getStates = () = {
    return new Promise((resolve, reject) => { 
         setTimeout(() => {
        let state = "TamilNadu";
        console.log(state);
        resolve(state);
        reject("Error occurd in getStates!!!");//callback();
    },1000);
});
};
const getCities = () => {
    return new Promise ((resolve, reject) => { 
        setTimeout(() => {
        let city = "Chennai"
        console.log(city);
        resolve(city);//callback();
    },1000);
});
};

const done = () => {console.log("Done!");
};
const getAddress = () => {
    getStates
    .then((state) => {
        return getCities();
        },
    (err) => {
        console.log(err);
    })
        .then(() => {
            return done();
        });
};
getAddress();