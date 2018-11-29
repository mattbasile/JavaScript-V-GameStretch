class Characters {
    constructor(attributes){
        this.name = attributes.name;
        this.health = attributes.health;
        this.weapon = attributes.weapon;
        this.secretMove = attributes.secretMove;
    }
    attack(){

    }
    special(){

    }
    heal(){

    }
}

const wizard = new Characters({
    name: "Merlin",
    health: 200,
    weapon: {
        "Staff": 10,
    }
    secretMove: {
        "Black Magic": function(){
            return Math.floor(Math.random() * Math.floor(15))
        }
    }
});
const bear = new Characters({
    name: "Grizz",
    health: 175,
    weapon: {
        "Long Claw": 20,
    }
    secretMove: {
        "Bear Hug": function(){
            return Math.floor(Math.random() * Math.floor(20))
        }
    }
});
const harpy = new Characters({
    name: "Harpy",
    health: 150,
    weapon: {
        "Silver Beak": 15,
    }
    secretMove: {
        "Lust to Death": function(){
            return Math.floor(Math.random() * Math.floor(30))
        }
    }
});
const groot = new Characters({
    name: "Grunt",
    health: 250,
    weapon: {
        "Chain Saw": 10,
    }
    secretMove: {
        "Timber!": function(){
            return Math.floor(Math.random() * Math.floor(20))
        }
    }
});