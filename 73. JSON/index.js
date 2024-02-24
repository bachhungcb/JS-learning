// JSON     =   (JavaScript Object Notation) data-interchange format
//              Used for exchanging data between a server and a web application
//              JSON files {key:value} OR [value1, value2, value3]

//              JSON.stringify() = converts a JS object to a JSON string.
//              JSON.parse() = converts a JSON string to a JS object

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.log(error));