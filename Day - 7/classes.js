class Animal {
    constructor() {
        console.log("this is constructor from Animal")
    }
    moves = true;
}

class Rabbit extends Animal {
    constructor() {
        super()
        console.log("this is constructor from Rabbit")
    }
}
eats = true;
let r = new Rabbit;


class person {
    constructor() {
        this.name = name;

    }
    getName() {
        this.name;
    }
}

class emplayee {
    constructor(name,id) {
        this.id = id;

    }
    getid(){
        this.id
    }
}