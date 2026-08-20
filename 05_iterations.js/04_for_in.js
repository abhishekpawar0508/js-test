const myObj = {
    A: "America",
    B: "Bhutan",
    C: "Canada",
    D: "Denmark",
    A: "Antartica",
}
// for (const [key, val] of myObj) {
//     console.log(`${key} :- ${val}`);

// }


for (const key in myObj) {
    // console.log(`${key} :-${myObj[key]}`);

}

let lang = ["js", "c++", "php", "ruby"]
for (const key in lang) {
    // console.log(`${lang[key]}`);
}

/*-- key of arrays is number by default. isliye hi object intriduce hua so that ki aap number ki jagha apni kuch bhi key daal le ---*/
/*-- map is not iterable that's why we cannot for in lop ---*/