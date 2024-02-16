// this = reference to the object where THIS is used 
//        (the object depends on the immediate context)
//        person.name = this.name
//        does not work with arrow function

const person1 = {
    name: "Bach",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hello my name is ${this.name}`)},
    eat: function(){console.log(`I like to eat ${this.favFood}`)},
}

const person2 = {
    name: "ABDC",
    favFood: "Hamburger",
    sayHello: function(){console.log(`Hello my name is ${this.name}`)},
    eat: function(){console.log(`I like to eat ${this.favFood}`)},
}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();

