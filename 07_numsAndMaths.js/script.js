// const newNumber=100.5278
// const num=new Number(100)//==>in this it's save as object means typeof will be object
// console.log(num);

// // NOW
// console.log(num.toString().length);
// console.log(typeof num);//object
// console.log(num.toFixed(2));//100.00
// console.log(newNumber.toFixed(2));//100.57 =>means it gives 2 places after decimal and round off also 
// console.log(newNumber.toPrecision(3));//101
// console.log(newNumber.toPrecision(4));//100.5

// const hundreds=1000000
// console.log(hundreds.toLocaleString()) //==>kabhi kabhar yeah US k according likha jaata hai jaise millions ki form main
// console.log(hundreds.toLocaleString('en-IN'))


//++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++
// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.floor(4.2)); //4
// console.log(Math.ceil(4.2)); //5
// console.log(Math.min(2,3,4,5)); //2


console.log(Math.random());//==>in this Range is 0 to 1 means [0,1)
//for range from 1 to 10
console.log((Math.random()*10)+1); //math.random 0 to 1 toh 10 se multiply and then add 1 jisse 0 nhi aayega ex-1.1234567
console.log((Math.floor((Math.random()*10)+1)));//numbers in form of 2,4,5,6,1,etc

//GENERAL FORMULA
//For random integer between min and max (both inclusive):
// Use =====> Math.floor(Math.random() * (max - min + 1)) + min

const min=10
const max=20
console.log(Math.floor((Math.random()*(max-min+1))+min));

// for 1 to 6
console.log((Math.random()*6)+1);




