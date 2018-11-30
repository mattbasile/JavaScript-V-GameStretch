class Characters {
    constructor(attributes){
        this.name = attributes.name;
        this.health = attributes.health;
        this.weapon = attributes.weapon;
        this.secretMove = attributes.secretMove;
        this.image = attributes.image;
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
    },
    secretMove: {
        "Black Magic": function(){
            return Math.floor(Math.random() * Math.floor(15))
        }
    },
    image: `<img src="img/wizard.jpeg>`,
});
const bear = new Characters({
    name: "Grizz",
    health: 175,
    weapon: {
        "Long Claw": 20,
    },
    secretMove: {
        "Bear Hug": function(){
            return Math.floor(Math.random() * Math.floor(20))
        }
    },
    image: `img/grizz.jpg`,
});
const harpy = new Characters({
    name: "Harpy",
    health: 150,
    weapon: {
        "Silver Beak": 15,
    },
    secretMove: {
        "Lust to Death": function(){
            return Math.floor(Math.random() * Math.floor(30))
        }
    },
    image: "img/",
});
const grunt = new Characters({
    name: "Grunt",
    health: 250,
    weapon: {
        "Chain Saw": 10,
    },
    secretMove: {
        "Timber!": function(){
            return Math.floor(Math.random() * Math.floor(20))
        }
    },
    image: "img/",
});
const team = {
    grunt,
    harpy,
    bear,
    wizard,
}

console.log(team.grunt.name);