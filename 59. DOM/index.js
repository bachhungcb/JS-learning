// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you seen in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JS can access the DOM to dynamically
//       change the content, structure, and style of a web page


const username = "Bach Dam";
const welcomeMsg = document.getElementById("msg");

welcomeMsg.textContent += username === "" ? 'Guest' : username; 