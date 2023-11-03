// create object
let camry = {
    // Kay: value
    name: "camry",
    color: "white",
    currentSpeed: 0,
    move: function(speed){
        this.currentSpeed = speed;
        console.log(`${this.name} is moving at ${this.currentSpeed}`);
    },
    stop: function(){
        this.currentSpeed = 0;
        console.log(`${this.name} has stopped`);
    }
}
// objectName.key
console.log("color: "+camry.color)
camry.move(50)
camry.stop()

console.log("--------------------------------------------------------------")
class Car {
    // 
    #currentSpeed
    static numberOfCars =0;
    constructor(name,color,currentSpeed){
        this.name=name;
        this.color=color;
        this.#currentSpeed=currentSpeed;
        Car.incrementNumberOfCars();
    }
    move(currentSpeed){
        this.#currentSpeed=currentSpeed;
        console.log(`${this.name} is moving at ${this.#currentSpeed} km`);
    }
    stop(){
        this.#currentSpeed=0;
        console.log(`${this.name} has stopped`);
    }
    static incrementNumberOfCars(){
        Car.numberOfCars++;
    }
}
let car1 = new Car("camry","white",20);
let car2 = new Car("corella","black",80);
let car3 = new Car("yaris","silver",30);
console.log(car1)
console.log(car2)
console.log(car3)
car1.move(20)
car2.move(200)
car1.stop()
console.log(`the the Number Of Cars is: ${Car.numberOfCars}`)

console.log("--------------------------------------------------------------")
class Animal {
    constructor(name,color){
        this.name=name;
        this.color=color;
        this.speed=0;
    }
    run(speed){
        this.speed=speed;
        return `${this.name} is running at ${this.speed}`;
    }
    makeSound(){
        return "sound...."
    }
}
class Cat extends Animal{
    
    makeSound(){
        return "mew...."
    }
}
class Fox extends Animal {
    makeSound(){
        return "bark...."
    }
}
let cat1 = new Cat("moon","white")
let fox1 = new Fox("wolf","black");
console.log(cat1)
console.log(fox1)
console.log(cat1.run(5))
console.log("fox "+fox1.makeSound())