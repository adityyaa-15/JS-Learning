let val1=10;
let val2=20;
function addTwo(num1,num2){
    let total=num1+num2
    return total
}
let result1=addTwo(val1,val2)
let result2=adTwo(3,5)
// ======================================================================================================================================

// Now we will learn how does Javascript execute code 
/* When JS runs your code it mainly passes through :
        A) Memory Creation Phase
        B) Execution Phase 
Like in Above Example
    Firstly memory cration phase will start 

    IN MEMORY CREATION PHASE :
    JavaScript scans the code before executing it.  
    Mmeory Allocated:
    val1==> undefined
    val2==>undefined
    addTwo==> whole function code (definiton)
    result1==> undefined
    result2==> undefined

    NOW , Execution phase starts :
    val1==>10
    val2==>20
    addTwo(this is of result1)=======> Now again Global Execution context 
                A) memory phase:
                    val1==>undefined
                    val2==>undefined
                    total==>undefined
                B) execution phase:
                    val1==>10
                    val2==>20
                    total==>15
                
                Now this total reaches to global and result got its ans ,then this block deletes
    addTwo(this is of result2)======> Now again global execution context
                A)memory:
                num1,num2,total=>undefined
                B)execution:
                num1=3
                num2=5
                total=8 
                and then process continues
    and then we get values;
    */

    //===================================================================================================================================
                //  CALL STACK

    /* JavaScript uses a Call Stack.

Example:*/
function one(){
    two();
}
function two(){
    three();
}
function three(){
    console.log("Hello");
}
one();
// =============
/* 
Stack:
Global()
↓
Global()
one()
↓
Global()
one()
two()
↓
Global()
one()
two()
three()
After completion:
three() removed
two() removed
one() removed
*/