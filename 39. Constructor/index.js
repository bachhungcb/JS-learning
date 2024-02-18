//constructor = special method for defining the 
//              properties and methods of objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.color = color,
    this.year = year,
    this.drive = function(){
        console.log(`You drive the ${this.model}`)
    }
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Toyota", "Camry", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

car1.drive();
car2.drive();
car3.drive();