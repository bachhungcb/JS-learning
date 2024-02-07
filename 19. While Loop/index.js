// while loop = reapeat some code WHILE some condition is true

let username = "";

while(username === "" || username === null){
    username = window.prompt();
}

console.log(`Hello ${username}`);