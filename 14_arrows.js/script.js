 // THIS ===> this refers to the current objects that's executing the function 
 const user={
    name: "aditya",
    price: 1999,

    welcomeMessage:function(){
        console.log(`${this.name},Welcome to Netflix !!`);
        console.log(this);// {name: 'aditya',
//                              price: 1999,
//                              welcomeMessage: [Function: welcomeMessage]
//                              
        }
    }   
console.log(user.welcomeMessage()); //aditya,Welcome to Netflix !!
user.name="hitesh";
console.log(user.welcomeMessage()); //hitesh,Welcome to Netflix !!


// BUT IF WE USE THIS FUNCTION IN FUNCTIONS THEN: 
function chai() {
    console.log(this);
}

chai();
//==============================================================

