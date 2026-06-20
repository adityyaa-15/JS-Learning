//Object definition
/* for symbol ==>*/ const sym=Symbol("key1") 
const myObj={
    name:"aditya",
    age:21,
    [sym]:"mykey1",
    //but if we directly write sym:"mykey1" it will be giving ans but typeof will be string not symbol that's why enclosed in square brackets 
    location:"jaipur",
    "full name":"aditya gupta",
    email:"aditya2gmail.com",
    isLoggedIn:false,
    lastLoggedDays:["monday","saturday"]
}
// Here these keys are also termed as string by the compiler thats why at one place i use double " "in on e of the keys to identify
console.log(myObj.email); //aditya2gmail.com
console.log(myObj["email"]); //aditya2gmail.com
// console.log(myObj.full name);//ERROR as it si defined in string so we have to use string syntax to rertrieve it

console.log(myObj["full name"]);//aditya gupta
// console.log(myObj.sym); // symbol also need string wala execution
console.log(myObj[sym]); 


//value change

myObj.email="adityyagupta@google.com"
myObj["email"]="adityyagupta@google.com"
console.log(myObj.email);

//value lock
Object.freeze(myObj)
myObj.email="VIRATKOHLI@google.com"
console.log(myObj);
 
//GREETING FUNCTION 
myObj.greeting=function(){
    console.log("Hello JS user ");
}
console.log(myObj.greeting());

myObj.greetingTwo=function(){
    console.log(`Hello JS user ${myObj.name}`);
    console.log(`Hello JS user ${this.name}`);
}
console.log(myObj.greetingTwo());

