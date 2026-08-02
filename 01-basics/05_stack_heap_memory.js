/*
Stack Memory: All primitive data stores in stack memory and whenever we change the data it gives us a copy.
*/

let userName = "Tom Cruise"

let anotherUser = userName
anotherUser = "Cptain America"

// console.log(userName, anotherUser);

let userOne = {
    user: "Abc",
    email: "abc@gmail.com"
}

let userTwo = userOne

userOne.email = "xyz@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



/*
Heap Memory: All non-primitive data stores in heap memory and whenever we change the data it gives us a refrence value that means original data changes.
*/