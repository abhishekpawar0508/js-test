// singleton: whenever we create a object with new keyword like below it known as singleton object

// const user = new Object()

const user = {}
user.id = 111
user.email = "abc.gmail.com"
user.isLoggedIn = true

// console.log(user);

/* when you access the method of object like below it return an array */
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
// console.log(Object.keys(user).length)
// console.log(user.hasOwnProperty("isLoggedIn"))

const students = {
    studentsDetails: {
        fullName: {
            firstName : "abc",
            lastName : "kumar"
        }
    }
}


// console.log(students.studentsDetails.fullName.firstName);
// console.log(students.studentsDetails?.fullName.firstName);

/*-- sometime we use "?" to check if value exist get it else not, In that case if value not exits it return "undefined". If we dont use ?" this and value not exist then it give error and in that case we have to use if and else whic is little lengthy ---*/


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
const obj4 = {7: "a", 8: "b"}

// const obj5 = {obj1, obj2}

// const obj5 = {...obj1, ...obj2, ...obj3, ...obj4}
// const obj5 = Object.assign(obj1, obj2, obj3)
// const obj5 = Object.assign({}, obj1, obj2, obj3)

/*---
const obj5 = Object.assign(target, source, source)
It basically put the values of source in target which is obj1 (whatever is at first place) here
To avoid this we use blank object "{}" so that all values go inside this blank object.
--*/

// console.log(obj5);

// when we fetch the data from database it give sometimes "Array of objects"

const userDetails = [
    {
        id : 1,
        email: "use1@gmail.com"
    },
    {
        id : 2,
        email: "use2@gmail.com"
    },
    {
        id : 3,
        email: "use3@gmail.com"
    }
]

// console.log(userDetails[2].email);
// console.log(Object.keys(userDetails));
// console.log(Object.values(userDetails));


/*** Object De-structring *****/
const courseDetail = {
    courseName : "JS",
    coursePrice : 999,
    courseInstructor : "Hitesh"
}

courseDetail.courseInstructor
// console.log(courseDetail.courseInstructor);

// if we have to use this 3-4 times we have to use repeat like "courseDetail.courseInstructor" which quite big syntax. To aovid this we use de-structring

// const {courseInstructor} = courseDetail
const {courseInstructor : instructor} = courseDetail //we can rename it is well

// console.log(courseInstructor);
console.log(instructor);

/*--- whenever you see curly braces inside parenteses, you should understand de-structing happen here ({})---*/
