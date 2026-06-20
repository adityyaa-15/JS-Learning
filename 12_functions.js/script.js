function addTwo(a,b){
    c=a+b
    console.log(c);
    return c
}

console.log(addTwo(3,4))  // null ko 0 maanega 
// console.log(result);

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,33,300,543))// [ 200, 33, 300, 543 ]
//===========================================================================
const user={
    name:"aditya",
    price:"199"
}
function handleObjects(anyobject){
    console.log(`The username is ${anyobject.name} and his price is ${anyobject.price}`);
}
handleObjects(user)
// Also we can also do 
handleObjects({
    name:"hitesh",
    price:"2000"
})

 