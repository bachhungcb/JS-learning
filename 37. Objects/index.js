// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value,
//                    function()}

const person1 = {
    firstName: "Bach",
    lastName: "Dam",
    age: 20,
    isEmployed: false,
    sayHello: function(){console.log("Hello")},
    eat: function(){console.log("I'm eating a pizza")},
}

const person2 = {
    firstName: "ABDC",
    lastName: "ABCA",
    age: 18,
    isEmployed: true,
    sayHello: () => console.log("Hello! Im person 2"),
    eat: () => console.log("I'm eating beef, chicken, pizza"),

}

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();