// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property 

// class Rectangle{

//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.log("Width must be a positive number");
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.log("Height must be a positive number");
//         }
//     }

//     get width(){
//         return `${this._width.toFixed(1)} cm`;
//     }
    
//     get height(){
//         return `${this._height.toFixed(1)} cm`;
//     }

//     get area(){
//         return `${(this._width * this._height).toFixed(1)} cm`;
//     }
// }

// const rectangle = new Rectangle(3, 3);



// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.age       = age;
    }

    set firstName(newFirstname){
        if(typeof newFirstname === "string" && newFirstname.length > 0){
            this._firstName = newFirstname;
        }else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastname){
        if(typeof newLastname === "string" && newLastname.length > 0){
            this._lastname = newLastname;
        }else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }else{
            console.error("Age must be non-negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastname;
    }

    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstName + " " + this._lastname;
    }
}

const person = new Person("Spongebob", "Square", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

