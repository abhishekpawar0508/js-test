/* Imediately Invoked Function (IIFE)
1. To execute function immediately
2. To protect the function from global pollution. Sometime function took the global variable in which case function expectpected output hamper. 
*/

//this is also known as name IIFE, when we give a name to function and run it immediately
(function db(){
    console.log("DB Connected");
})(); //sometimes it gives error when we run two IIFE continues, because engine confuses where to end the code that's why we have to end the code with this (';').

(function (name){
    console.log(`${name} db connected`);
})("abc")

/*** IIFE Arrow function ***/

//this is known as unnamed IIFE, when we run the function as a arrow without giving any name 
(() => {
    console.log("DB connected two");
})();

//IFFE with parameter
((name) => {
    console.log(`${name} db connected`);
})("mongo");

