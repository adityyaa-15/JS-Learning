const name="aditya"
const age=21
console.log(`My name is ${name} and my age is ${age}`)
//Another way of defining string
const anotherName= new String("aditya-gupta")
console.log(anotherName [0])
console.log(anotherName.length);
console.log(anotherName.toUpperCase());
console.log(anotherName.charAt(2));
console.log(anotherName.indexOf('a'));

//Substring=>  It's use to retrive data from string 
//             but in these no negative indexing is possible if given it will count as 0 like(-2,4) it will be count as(0,4)
//             if by mistake (4,1) then javascript make it (1,4)
const newString= anotherName.substring(0,4)
console.log(newString);//adit
//Slice=> use to retrieve data from string 
//        can even take negative indexing which is not possible in substring 
//        if by mistake (4,1) then it will print an empty string ""
const anotherString=anotherName.slice(0,4)
console.log(anotherString);//adit
const anotherString1=anotherName.slice(-3)
console.log(anotherString1);


//TRIM==> trim the extra spaces from characters there are trim-start and trim-end as well
const newStringOne="    aditya    "
console.log(newStringOne);
console.log(newStringOne.trim());

//REPLACE => Use to replace the part of string to another string
const url="https:/aditya.com/aditya%20gupta"
console.log(url.replace("%20","-"));

//Includes=>check whether a part of string belong or not . gives boolean answer 
console.log(url.includes("khandelwal"));//false

console.log(anotherName.split("-")); //[ 'aditya', 'gupta' ]




