// ES6 Module = An external file that can contains resuable code
//              that can be imported into other JS files;
//              Write reusable code for many different apps.
//              Can contain variables, classes, functions ... and more
//              Introduced as part of ECMAScript 2015 update

import {PI, getArea, getCircumference, getVolume} from './mathUtil.js';

console.log(PI);
console.log(getArea(3));
console.log(`${getCircumference(5)} cm`);
console.log(getVolume(5));