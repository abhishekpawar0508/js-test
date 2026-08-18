let arr = ["A", "B", "C", "D"]

// for (const i of arr) {
//     console.log(`${i}`);

// }


// for (const i of arr) {
//     if (i == arr[2]) {
//         console.log( `Got the value of 2 index ${i}`);
//         break
//     }
//      console.log(`${i}`);
// }


// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(greet);
// }

//Maps

const map = new Map();

map.set ("A", "America")
map.set ("B", "Bhutan")
map.set ("c", "Canada")
map.set ("D", "Denmark")
map.set ("A", "America")
/* Map known for the holding unique values and maintain the order we have put values.
It remove the duplicate entry automatic like here it removes the ("A", "America")*/

// console.log(map);

/*-- Right now it print the exact Array --*/
for (const key of map) {
    // console.log(key);
    //Right now it print the exact Array
}

/*-- for print key and value we can put [] like below --*/
for (const [key, val] of map) {
    // console.log(`${key} :- ${val}`);

}

// const myObj = {
//     'A' : "America",
//     'B' : "Bhutan",
//     'C' : "Canada",
//     'D' : "Denmark",
// }

const myObj = {
    A : "America",
    B : "Bhutan",
    C : "Canada",
    D : "Denmark",
}
for (const [key, val] of myObj) {
    console.log(`${key} :- ${val}`);

}

/*--- You can not directly iterate the object from "for of" loop ---*/