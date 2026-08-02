"use strict"; // treat all code as per new standard

let userName = "Abhi"
let userId = 345
let isLoggedIn = true
let userAge = null
let bigNumber = 1242343435345n

let consumerId = Symbol("1234");
let anotherUserId = Symbol("1234")

// console.log(userId === anotherUserId);


// *primitive data types
// number => 2 to pwer 53
// bigInt => for large number of values, mostly used in stock/trading websites
//string => ""
//boolean => true/false
// null => standalone value (empty value when you not required the answer 0, like temperature)
//undefined => value is not defined yet
//symbol => used mostly for identify unique like figma use of component

// *non-premitive data type (Reference types)
//object, array

// console.log(typeof null); // type of null is object
// console.log(typeof undefined); // type of undefined is undefined

let additionFunction = function myFunction(){

}

// console.log(typeof additionFunction); 
//datatype function but its known as function object

let userDetails = {
    name: "Abc",
    age: 25
}

// console.log(typeof userDetails);

// console.log(typeof bigNumber);

// let marvel = ["Spiderman", "Iron Man", "Doctor Strange"]

// console.log(typeof marvel);
