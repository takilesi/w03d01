class Hamster {
    constructor(name){
        this.owner = ""; 
        this.name = name;  
        this.price = 15
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

class Person {
    constructor(name){
        this.name = name 
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0 
        this.hamsters = [0]
        this.bankAccount = 0
    }
    getName(){
        console.log("Name is:", this.name); 
    }
    getAge(){
        console.log("Age is:", this.age); 
    }
    getWeight(){
        console.log("Weight is:", this.weight); 
    }
    greet(){
        console.log("Hello", this.name); 
    }
    eat(){
        this.weight += 5; 
        this.mood += 1;  
    }
    exercise(){
        this.weight -= .005; 
    }
    ageUp(){
        this.age += 1;
        this.height += .01; 
        this.weight += .01; 
        this.mood -= .5; 
        this.bankAccount -+ 10; 
    }
    buyHamster(hamster){
        hamsters.push(new Hamster("Bob", "Squeeky", 15)); 
        this.mood += 10; 
        this.bankAccount -= getPrice()
    }
}