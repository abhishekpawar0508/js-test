/* There are two ways to declare object
1. Constructor (Whenever you create object from constructor it always be "Singleton Object" which is its type of unique)
object.create

2. Literals
const user = {}
*/

const user = {
    name = "Abhi",
    age = 22,
    email = "abc@gmail.com",
    isLoggedIn = false,
    loggedInHistory = ["Monday", "Saturday", "Friday"]
}

console.log(user);
