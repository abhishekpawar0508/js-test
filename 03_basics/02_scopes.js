let a = 100
const b = 20
var c = 30

if(true) {
    let a = 10
// const b = 20
// var c = 30
// console.log(`Internal: ${a}`);

}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    let username = "Abhi";

    function two() {
        let website = "google"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()
// Internal function can access the value of parent but parent can't access the value of child


if(true) {
    const username = "Abhi"

    if(true) {
        const website = " google"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++ Interesting concept hoisting +++++++++

console.log(addOne(4));
function addOne(num) {
    return num + 1
}



// addTwo(6)
const addTwo = function (num) {
    return num + 2
}

/************* 
when store a function in a variable it known as "expresssion" and we cannot access this before initialization

*******/