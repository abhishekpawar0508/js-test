const marvelHeros = ["Iron Man", "Thor", "Captain America", "Spider Man"]
const dcHeros = ["Batman", "Superman", "Wonder Women"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros[4][1]);


// const combineHeros = marvelHeros.concat(dcHeros)
// console.log(combineHeros)

const allHeros = [...marvelHeros, ...dcHeros]
// console.log(allHeros);
/* this spread operator method is better than concat */

const anotherArr = [0, 1, 2, 3, [4, 5], [6, 7, 8, [9, 10]]]
const realAnohterArr = anotherArr.flat(1)
const realAnohterArrNew = anotherArr.flat(Infinity)
/* In flat method you can give number at which level you want to merge to single array or you can give infinity */
// console.log(realAnohterArr);
// console.log(realAnohterArrNew);

// console.log(Array.isArray("Doctor Strange"));
// console.log(Array.from("Doctor Strange"));
/* from method make array any value you want */
// console.log(Array.from({name: "Abhi"}));
/**** when you try to createa array from object then it gives [] empty array. In that case we have to tell from which value or key we have to create array. ****/

const obj = {name: "Abhi", age: 22}
// console.log(Array.from({name: "Abhi"}));
/*Although Object.keys() always return an array, so Array.from is unnecessary  */
// console.log(Array.from(Object.keys(obj)));
// console.log(Object.keys(obj));

const scoreA = 100
const scoreB = 200
const scoreC = 300
const scoreD = 400

console.log(Array.of(scoreA, scoreB, scoreC, scoreD));


