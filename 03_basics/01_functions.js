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
