// IIFE==> Immediately Invoked Function Expressions

// ==> An IIFE is a function that is defined and executed immediately
// ==> It's use To create a separate scope and avoid polluting the global scope.

(function () {
    let message = "Hello";
    console.log(message);
})();

// think like this chai() so chai is a function,and ()is for declaration so we had ()();

(function(name){
    console.log(`Hello ${name}! How are you?`);
})("aditya");

// USING ARROW FUNCTION

(()=>{
    console.log("hello");
})();

// the extra () at last because without this javascript treat it as normal function declaraton to run the function we need extra parenthesis and it calls immediately

//When two iife are working togetger make sure to use ; (semicolon) after first iife to save from error
(function(){
    console.log("aditya");
})();

(function(age){
    console.log(`my age is ${age}`);
})(12);

(function chai(){
    console.log("1");
})() //it is named iife