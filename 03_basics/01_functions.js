/* 
when we declare function then the value known as "parameter" and when we call the function values known as "arguments"

function abc (parameter1, parameter2){}

abc(argument1, arguement2)

abc: now function is called
abc() : now function is executed
*/


// function addTowNumbers (num1, num2) {
//     console.log(num1 + num2);  
//     //function is not returning value 
// }

//addTowNumbers() //return NaN
// addTowNumbers(5, 6)
// addTowNumbers("5", 6)

// const result = addTowNumbers(5, 4)
// console.log(result); // undefined because it 

// function addNumb(n1, n2) {
//     let result = n1 + n1
//     return result;
//     console.log("Abc"); //after "return" keyword code will not execute in function
    
// }

function addNumb(n1, n2) {
    return n1 + n2
}
const resultAddNumb = addNumb(4, 3);
// console.log(resultAddNumb);

function loginUserMsg (username = "Sam") {
    if(!username) {
        console.log("Please enter username");
        return
    }
    // if(username === undefined) {
    //     console.log("Please enter username");
    //     return
    // }

    return `${username} just logged in`
}

// console.log(loginUserMsg("abc"));
// console.log(loginUserMsg()); // if value is empty its return "undefined"


function itemsPrices (num1, num2, ...num) {
    return num
}

// console.log(itemsPrices(10, 20, 30, 40, 50));
/* rest operator (...parameter) when we don't know how much values we get in that we use rest operator and its return an array*/

const user = {
    name: "Abc",
    email: "abc@gmail.com"
}

function userDetails (anyObj) {
    return `user name is ${anyObj.name} and user email is ${anyObj.email}`
}

// console.log(userDetails(user));
// console.log(userDetails({
//     name: "xyz",
//     email: "syz@gmail.com"
// }));


const myArray = [100, 400, 200, 600]

function getSecondValue(anyArray) {
    return anyArray[1]
}   

// console.log(getSecondValue(myArray));
console.log(getSecondValue([10, 20, 40, 60]));