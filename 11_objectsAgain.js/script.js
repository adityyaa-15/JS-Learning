// we can also use nested objects like
const regularUser={
    email:"aditya@google.com",
    fullName:{
        userFullName:{
            firstName:"aditya",
            lastName:"gupta"
        }
    }
}

// console.log(regularUser.fullName.userFullName.lastName );

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b",5:"c"}
const obj3=obj1+obj2
console.log(obj3); //[object Object][object Object]
// Matlab JavaScript object ko directly add (+) nahi kar sakta, isliye wo pehle object ko string mein convert karta hai.

// MERGE INSE SE HOGA
console.log(Object.assign({},obj1,obj2));
// console.log(...obj1,...obj2); //will give you error if you do directly
//INSTEAD USE THIS 
const obj4={...obj1,...obj2}
console.log(obj4);

//USE IN DATABASE
//IMPORTANT
/*JAB PROJECT BANAYEGE TOH BAHUT SAARE INPUT AAYEGA JAISE
    const user=[
        {
            id:"1",
            name:"a"
        }
        {
            id:"2",
            name:"b"
        }
    ]
    aise bhaut saare toh we can acces them via 
    user[1].id===>1

    And, 
    console.log(Object.keys(obj2));
    console.log(Object.values(obj2));
    inn dono ka ans array k andar store hoga toh access krna easy hoga programs main*/

    console.log(Object.entries(obj2)); //[ [ '3', 'a' ], [ '4', 'b' ], [ '5', 'c' ] ]
    console.log(obj2.hasOwnProperty('number')); //false
    console.log(obj2.hasOwnProperty('5')); //true

//=================================================================================================================
    
// Destructuring : Destructuring means unpacking/extracting values from arrays or objects into separate variables.

const user={
    name:"Aditya",
    id:"1",
    email:"aditya@gmail.com"
}

const{name, id:roll_no , email}=user;
console.log(name); //aditya
console.log(roll_no,email); // 1 aditya@gmail.com 



    