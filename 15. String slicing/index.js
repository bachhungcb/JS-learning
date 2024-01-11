//string slicing = creating a substring 
//                 from a portion of another srting

//                 string.slice(start,end)

const email = "abcsafw@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);