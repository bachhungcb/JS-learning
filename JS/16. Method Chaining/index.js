//Method Chaining = Calling one methodafter another in
//                  one continous line of code

let username = window.prompt("Enter your username: ");

//--NO METHOD CHAINING--

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

//--METHOD CHAINING--

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);