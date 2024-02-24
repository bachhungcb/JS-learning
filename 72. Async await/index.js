// Async/Await =  Async = makes a function return a promise
//                Await = makes an async function wait for a promise

//                Allows you write asynchronous code in a synchronous manner
//                Async doesn't have resolve or reject parameters
//                Everything after Await is replaced in an event queue

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

            const kitchenCleaned = false;
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
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("Take out trash");
            }else{
                reject("You didn't take out the trash");
            }
        }, 500);
    });
};

async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You finished all the chores");
    }
    catch(error){
        console.error(error);
    }
 

}

doChores()