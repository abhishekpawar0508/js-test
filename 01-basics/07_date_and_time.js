let birthday = new Date();
// console.log(birthday);
// console.log(birthday.toDateString());
// console.log(birthday.toLocaleString());
// console.log(birthday.toString());

// console.log(typeof birthday);

// let anotherBirthday = new Date(2026, 1, 22)
// console.log(anotherBirthday.toDateString());

// let anotherBirthday = new Date(2026, 1, 22, 5, 3)
// console.log(anotherBirthday.toLocaleString());

// let anotherBirthday = new Date("2026-01-22")
// console.log(anotherBirthday.toLocaleString());

let anotherBirthday = new Date("01-14-2026")
// console.log(anotherBirthday.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(myTimeStamp/1000));
// console.log(anotherBirthday.getTime());

/*Always compare time in milliseconds */

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(`date is ${newDate.getDay()} and time is ${newDate.getTime()}`);



// console.log(newDate.toLocaleString('en-In', {
//     timeZone: 'Asia/Kolkata',
//     hour: "numeric",
//     minute: "2-digit",
//     hour12: true
// }) );


