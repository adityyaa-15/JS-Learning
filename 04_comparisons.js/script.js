console.log(2>1) //true
console.log("2">1) //true
console.log("abc">1) //false
// When comparing a string and a number using >, JavaScript converts the string to a number.
// For "abc" > 1, "abc" becomes NaN, and any comparison with NaN is false.

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true ==>(null>=0 ====>!(null>0) )
// For >,< comparison, null is converted to a number: null → 0

//for undefined it's always false 

// FOR === (3 EQUALS)
console.log("2"==2); //true
console.log("2"===2); //false (checks datatypes also)


