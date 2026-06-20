let score="33abc"
console.log(typeof score) //string
// now what we are doing we are changing it to number datatype

let valueInNumber=Number(score)
console.log(typeof valueInNumber)//number
//wait ! but 33abc can not be a number so lets print value 
console.log(valueInNumber) //NaN (not a number) 


let id=null
let value=Number(id)
console.log(typeof value)//number
console.log(value) //0

let id2=undefined
let value2=Number(id2)
console.log(value2) //NaN

// "33"=>33
// "33abc"=>NaN
// true=>1; false=>0
// null=>0
// undefined=>NaN


// ALSO IF WE CHANGE IT TO BOOLEAN 
let ans=null
let isLogged=Boolean(ans)
console.log(isLogged)
// 1=> true
// ""=>false(in case of empty string)
// "adi"=>true 
// null=>false

// ALSO WHEN WE HAVE TO CHANGE IN STRING 
// **************** OPERATIONS ****************

let str1="hello"
let str2=" aditya"
let str3=str1+str2
console.log(str3)

// ANDDDD

console.log("1"+2)  //12
console.log(1+"2")  //12
console.log("1"+2+2)//122
console.log(1+2+"2")//32
let num=1+2+"2"
console.log(typeof num) //string
console.log(true) //true
console.log(+true) //1