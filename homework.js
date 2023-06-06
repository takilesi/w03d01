class Hamster {
    constructor(owner, name, price){
        this.owner = owner
        this.name = name 
        this.price = price
    }
    wheelRun(){
        console.log("squeek squeek"); 
    }
    eatFood(){
        console.log("nibble nibble"); 
    }
    getPrice(){
        console.log("Cost of Hamster:", this.price); 
    }
}

const jollyRoger = [new Pirate("Kirk",54,"Enterprise"), 
                    new Pirate("Jack",35,"Titanic"),
                    new Pirate("Ahab",42,"MayFlower")
                    ]

const blackPearl = [new Pirate("Magellan",54,"Lusitania"), 
                    new Pirate("Nemo",35,"Bounty"),
                    new Pirate("Cook",35,"Beagle")
                    ]

console.log(jollyRoger)
console.log(blackPearl)