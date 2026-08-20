/* Map bydefault return the value automatic */

const myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbs = myNumbs.map( (num) => num + 10 )

// console.log(newNumbs);

const newNum = []
myNumbs.forEach( (val) => {
    return newNum.push(val + 10)
} )

// const newNum = myNumbs.forEach( (val) => {
//     return val + 10
// } )

// console.log(newNum);


/*--- chaning : You can use 2-3 method continously and the result of fiest method(chain) pass to new chain 

map we have to perform action and it return the value

filter true false
---*/

const myNum = newNumbs
              .map( (val) => val * 10)
              .map( (val) => val + 1)
              .filter( (val) => val >= 140)

console.log(myNum);
