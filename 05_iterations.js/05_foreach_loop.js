const coding = ["java", "python", "ruby", "c++"]

/* 1. forEach function takes a callback function that means we don't need to give the name of fucntion
    2. Parameter here works as iterable variable we don't need to give another varaible
    3. By default foreach not return value
*/
coding.forEach(function (item) {
    // console.log(item);

})

// arrow function
coding.forEach((val) => {
    // console.log(val);

})

/*--- By default array have three parameter value of array, index of array and third return a complete array ---*/
coding.forEach((val, index, arr) => {
    // console.log(val, index, arr);

})


const mycoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "python",
        languageFile: "py"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
]

mycoding.forEach((item) => {
    // console.log(item.languageName);
    // console.log(`${item.languageName} have ${item.languageFile} extension`);
})