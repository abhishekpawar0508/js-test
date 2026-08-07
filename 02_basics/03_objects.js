/* There are two ways to declare object
1. Constructor (Whenever you create object from constructor it always be "Singleton Object" which is its type of unique)
object.create

2. Literals
const user = {}
*/

const mySymb = Symbol("sym1")

const user = {
    name : "Abhi",
    age : 22,
    "full name" : "Abhi Pawar",
    [mySymb]: "abc",
    email : "abc@gmail.com",
    isLoggedIn : false,
    loggedInHistory : ["Monday", "Saturday", "Friday"]
}

// console.log(typeof user.email);
// console.log(user["age"]);
// console.log(user["full name"]);
// console.log(typeof user[mySymb]);

/*--- We can call object, through sqaure bracket as well bs keys hamesha as a string pass hogi ["age"].
Because behind the scene when we declare key value
name: "Abhi", it written like this "name": "Abhi". Also you can check the type of key which is string.
If "full name" : "Abhi Pawar", this is your key pair there is no another way to access this key without ["full name"]
---*/

/*--- ek symbol declare kro, useko key mein lo or print kr k dikha do.
declare a symbol like this : const mySymb = Symbol("sym1")
add key pair in object : [mySymb]: "abc",
to access this object[mysymb] there is no other way
---*/


user.email = "xyz@gmail.com"
// console.log(user.email);
// Object.freeze(user)
user.age = 28;

// console.log(user);

user.greeting = function(){
    console.log("Hello user");
}

user.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`); //string interpolation
}
/*--- "this" used for access all the property of "user" because without "this" it's dont know the property of user. ---*/


console.log(user.greeting());
console.log(user.greetingTwo());
