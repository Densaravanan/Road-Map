const getStates = (callback) = {
    setTimeout(() => {
        let state = "TamilNadu";
        console.log(state);
        callback();
    },1000;)
}
const getCities = (callback) = {
    setTimeout(() => {
        let city = "Chennai";
        console.log(city);
        callback();
    },1000;)
};
const done = () => {console.log("Done!");
}
const getAddress = () => {
    getStates(() => {
        getCities(() +> {
            done();
        });
    });
};
getAddress();