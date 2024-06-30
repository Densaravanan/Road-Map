const functionOne = () => 
    {
        console.log("Hey, this is Function ONE!!!");
        functionTwo();
        console.log("Hey, this is Function ONE Part TWO !!!");

    };
const functionTwo = () => {
      setTimeout(() => console.log("Hey this is Function TWO!!!"))
    //console.log("Hey This is Function Two");
};
functionOne();