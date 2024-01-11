//string methods = allow you to manipulate and work with test (strings)

let userName = "BachDam ";
// userName = userName.trim();
// console.log(userName);
// userName = userName.toUpperCase();
// console.log(userName);
// userName = userName.toLowerCase();
// console.log(userName);
// userName = userName.repeat(4);
// console.log(userName);
// let result = userName.startsWith(" ");
// console.log(result);
// console.log(userName.charAt(0));
// console.log(userName.indexOf("a"));
// console.log(userName.lastIndexOf("a"));
// console.log(userName.length);

//let result = userName.startsWith(" "); //endsWith

let result = userName.includes(" ");

if(result){
    console.log("Your user name can not include ' ' " );
}
else{
    console.log(userName);
}