// Falsy
// 0
// ''
// null
// undefined
// NaN
//false

//anything is not falsy is truthy

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); //red

//if userColor is undefined, null, 0, false, NaN, '' then defaultColor will be assigned to currentColor