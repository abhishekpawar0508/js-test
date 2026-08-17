// if(2 === 2) {
//     console.log("yes");
// }

const isUserloggedIn = true
const temperature =  41

// if (2 !== 3) {
//     console.log(`Yes user looged in.`)
// }

// <, >, <=, >=, ==, !=, ===, !==

// if (temperature < 50) {
//     console.log("temp is less than 50");
// } else {
//     console.log("temp is greater than 50");
// }
// console.log("executed");

// const score = 200

// if (score > 100 ){
//     let power = "fly"
//     console.log(`User power ${power}`);
// }

// console.log(`User power ${power}`);

const balance = 1000

//implicit scope: no need to add {} curly braces but this works only for one line and close the line with (;). We can write multiple line seprating with comma which is not a good standar of code. We have to avoid (,).
// if (balance > 500) console.log("true"),console.log("abc");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");   
// } else if (balance < 900) {
//     console.log("less than 900");   
// } else {
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestUSer = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy courses")
}

if (loggedInFromEmail || loggedInFromGoogle || guestUSer) {
    console.log("user logged in");
}