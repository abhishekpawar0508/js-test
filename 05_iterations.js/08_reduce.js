/* reduce method :- first time takes initial value and put it to accumulator, and then 2 time it put the return/result value in accumulator

it used in shopping cart to add price of all the products in cart
*/

const myNumbs = [1, 2, 3]

// const myTotal = myNumbs.reduce( function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    
//     return accumulator + currentValue
// }, 0)

//arrow function
const myTotal = myNumbs.reduce( (acc, curVal) => acc + curVal, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const addPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(addPrice);
