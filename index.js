// use strict;
alert('Hi there!');

let tempVar = 42;
console.log(tempVar + ' is a '+ typeof tempVar);
// Output: "number"

tempVar = 15587445971115889554447;
console.log(tempVar + ' is a '+ typeof tempVar);
// Output: BigInt

tempVar = "42";
console.log(tempVar + ' is a '+ typeof tempVar);
// Output: "string"

tempVar = true;
console.log(tempVar + ' is '+ typeof tempVar);
// Output: "boolean"

console.log('undeclaredVariable is '+ typeof undeclaredVariable);
// Output: "undefined"

tempVar = null;
console.log(tempVar + ' is an '+ typeof tempVar);
// Output: object

tempVar = {};
console.log(tempVar + ' is an '+ typeof tempVar);
// Output: object
