// class = (ES6 feature) provides a more structured and cleaner  way to
//          work with objects compare to traditional constructor function
//          ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 10.99);
const product2 = new Product("Pants", 22.90);
const product3 = new Product("Underwear", 30.99);

product1.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax) is $${total.toFixed(2)}`);