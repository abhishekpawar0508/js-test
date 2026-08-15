/* 
Execution context:

There are three execution context.
1. Global Execution context (this)
2. Function Execution context
3. Eval Execution context : It's use in mongoose etc, and it is a property of global object 
*/

let val1 = 10
let val2 =5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val, val2)
let result2 = addNum(10, 2)

/*
1. Global Execution: (this)
2. Memory Creation Phase: Where memory allocate for variables
val1 -> undefined
val2 -> undefined
addNum -> undefined (defination of function)
result1 -> undefined
result2 -> undefined



Execution Phase:  This is for result1
val1 <- 10
val2 <- 5
addNum ---> (New Sandbox) new variable environment + Execution thred (jitni bar bhi functions execute hote utni baar new box create hota h, which is known as new Execution context) -->

memory phase:
val2 -> undefined
val2 -> undefined
total -> undefined

Execution context: Processing, calculation
num1 -> 10
num2 -> 5
total -> 15 (return to Global EC)

New sandbox after it works complete it delete auto

same new sandbox repeatition for result2 like result 1
*/


/* 
Call Stack: LIFO (Last In First Out)
*/

function one() {
    console.log("one")
    two()
}

function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
} 

one()
two()
three() 