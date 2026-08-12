// "use strict"


// console.log(this);
/********
 
console.log(this);

 1. if we simply print "this" it return global object based on in which environment you run it. e.g. if you run in node it simply return empty object {} but if you run it in browser it retun window.object becauase in browser window is our global object, same as smartwatch or other environment.

 function abc(){
    console.log(this);
 }

abc()
window.abc()

 2. when you execute an function in strict mode "this" behave differently
 without strict mode: it return "global object"
 with strict: it return "undefined"

 3. It also depends at how you execute a function in strict mode if you call it with "window.functionName() it return global object"
 ********/

const user = {
    username: "Abhi",
    price: 599,
    
    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// this refer to current context
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


 /*** this. only works in object in function you can't directly access value like object. ***/ 
// function chai() {
//     let name = "abc"
//     console.log(this.name);
// }

// chai()

// const chai = function () {
//     let name = "abc"
//     console.log(this.name);
// }

// chai()

const chai = function () {
    let name = "abc"
    console.log(this.name);
}

// chai()

/* Explicit return: When you expilicit use "return" keyword */
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

/**** Implicit return: when you remove retun keyword remove curly braces and put code in one line 

also you can use parenteses 

jab () use nhi krenge tb return keyword likhna padega
or jab () use krenge tb return keyword nhi likhna padega


****/
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({email: "abc@gmail.com"})

console.log(addTwo(4, 5));



