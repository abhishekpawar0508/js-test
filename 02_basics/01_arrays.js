let arr = [0, 1, 2, 3, 4, 5]
let mixArr = [0, 1, true, 3, "Abc", 5]
let heros = ["Iron Man", "Hulk", "Spider Man", "Captain America", "Dr Strange", "Loki"]

let newArr = new Array(0, 1, 2, 3, 4, 5)

// console.log(heros[2]);

/* when you check array in inspect it give two prototypes  */

//array methods

// heros.push("Ant Man")
// heros.push("Black Panther")
// heros.pop()

/* push always insert value in end/last */ 
/* pop removes the last from the array */
 
// console.log(heros)

// heros.unshift("Thanos") 
/* unshift insert the value at start, so we have used to carefully because it shifts all the value of array */

// heros.shift("Thanos") /* shift removes the first from the array */


//console.log(heros.includes("Loki")) // return true false 
// console.log(heros.indexOf("Ant Man")) 
// if value/element not exist it return -1

const newHeros = heros.join()
// join joined the array and convert it into string

// console.log(heros);
// console.log(typeof newHeros);


/** slice and splice **/
console.log("1", heros);

const herosA = heros.slice(1, 3)
console.log("2", herosA);

const herosB = heros.splice(1, 3)
console.log("2", herosB);