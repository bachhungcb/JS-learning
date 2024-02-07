// while loop = reapeat some code WHILE some condition is true

let login = true;
let username;
let password;

while(!login){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        login = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Wrong username or password. Please try again!");
    }
}
