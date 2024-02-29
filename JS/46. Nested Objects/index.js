// nested object = Objects inside of another Objects.
//                  allow you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
//     fullName: "Spongbob Squarepant",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address:{
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water",
//     }
// }


// for (const property in person.address){
//     console.log(person.address[property]);
// }

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", 
                                            "Bikini Bottom",
                                            "Int. Water");
const person2 = new Person("ABDwcw", 25, "126 Conch St.",
                                         "Bikini Bottom",
                                         "Int. Water",
                                         "12321");
console.log(person1.address.country);
console.log(person2.address);
    