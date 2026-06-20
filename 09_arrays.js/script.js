const myArr=[1,2,3,4,5]
console.log(typeof myArr) //object
//JavaScript arrays are resizable and can contain a mix of different data types.

const myArr2=new Array(1,2,3,4)
myArr.push(3)
myArr.unshift(0)//starting main add krta hai
console.log(myArr);
console.log(myArr.includes(9))//false
console.log(myArr.indexOf(9));//-1

 //JOIN ==> converts an array into string

 const newArr=myArr.join()
 console.log(typeof newArr) //string
 console.log(newArr) //1,2,3,4,5 
 // here default common seperator is , we can also change it by 
 console.log(myArr.join("-->")) 

// SLICE
// Extract elements from an array.
let arr = [1, 2, 3, 4, 5];
let ans = arr.slice(1, 4);
console.log(ans); // [2,3,4]
console.log(arr); // [1,2,3,4,5]

// * Start index included.
// * End index excluded.
// * Original array unchanged

//SPLICE    
//Removes elements from the original array.
let arr4 = [1, 2, 3, 4, 5];
let ans4 = arr4.splice(1, 2);
console.log(ans4); // [2,3]
console.log(arr4); // [1,4,5]
arr4.shift()
console.log(arr4);

// * Start at index 1.
// * Delete 2 elements.
// * Original array modified.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/
// Spread operator(...)
// The spread operator (...) is used to expand an array, object, or iterable into individual elements.
const spreadArr=[1,2,3,[11,21],33,4,5,[6,7,8,9]]
const spreadArr1=[...spreadArr]
console.log(spreadArr1);//[ 1, 2, 3, [ 11, 21 ], 33, 4, 5, [ 6, 7, 8, 9 ] ]

console.log(spreadArr.flat(1))
// FLAT() IS USED TO FLATTEN THE ARRRAY REMOVE THE NESTED LOOPS

