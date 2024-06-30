 const getUserName = (name , callback) => {
    setTimeout(() => {
        console.log("NOw we have a used to display!!!");
        const _name = { user: name };
        callback(_name);// { user:Guvi }
    },3000); // we don't know the time
};
const user = getUserName("Guvi", (user) => {
    console.log(user);
});