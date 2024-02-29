//promise = An object that manages asynchronous operations.
//          Wrap a Promise Object around {synchronous code}
//          "I promise to return a value"
//          PENDING -> RESOLVED or REJECTED
//          new Promise((resolve, reject) => {asynchronous code})

//  DO THESE CHORES IN ORDER

// 1.   WALK THE DOG
// 2.   CLEAN THE KITCHEN
// 3.   TAKE OUT THE TRASH

function walkDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{

            const dogWalked = true;

            if(dogWalked){
                resolve("Walk Dog");
            }else{
                reject("You didnt't walk the dog");
            }
        }, 1000);
    });
};

function cleanKitchen(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{

            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("Clean kitchen");
            }else{
                reject("You didn't cleaned the kitchen");
            }
        }, 3000);
    });
};


function takeOutTrash(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const trashTakenOut = false;
            if(trashTakenOut){
                resolve("Take out trash");
            }else{
                reject("You didn't take out the trash");
            }
        }, 500);
    });
};

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {(console.log(value)); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores")})
         .catch(error => console.error(error));
