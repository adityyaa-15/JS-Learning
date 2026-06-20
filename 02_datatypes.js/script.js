"use scrict" // it treats all JS code as newer version 

// alert(3+3) This will give give error as we are not working on browser(usme shi dikayega aur run ho jayega) but in this node js it is showinig error

// number
// bigInt
// string=>" "
// boolean => true/false
// null=> standalone value 
// undefined
// symbol=>unique and mostly uses in react

console.log(typeof "hitesh") //string
let age=10
console.log(typeof age) //number

console.log(typeof null) //object 
// null ka typeof object aata h
console.log(typeof undefined)

//There are two types of datatypes

//  1) Primitive ==>  These store a single value and are immutable
//                     Primitives are copied by value.
//                     ex-Number,string,Boolean,null,undefined,symbol
//   2) Non-Primitive ==> These store references (addresses) to objects in memory
//                        Non-primitives are copied by reference.
//                        ex- objects,arrays,functions



//SYMBOL
let sym1=Symbol("123")
let sym2=Symbol("123")
console.log(sym1==sym2); //false
