// const userEmail = "abc@gmail.com"
// const userEmail = ""
// const userEmail = []
const userEmail = {}

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values : if something written in string whether in doblue quotes or single quotes.
// "0", 'false', " ", [], {}, function(){}
// false == 0, false =='', 0 == '' 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

// if (Object.keys(emptyObj).length === 0)  {
//     console.log("object is empty");
    
// }

//Nullish Coalescing Operator (??): null undefined

/* This works to safety check the value of null and undefined. Mainly it used to check the if we get the null or undefined or value in that case it simply print the first value. If not get the value then null or undefined */

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = 10 ?? null

// val1 = undefined ?? 10
// val1 = 10 ?? undefined
// val1 = null ?? 10 ?? 20


// console.log(val1);

//Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")