// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(`${i}`);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);

//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

let superHeroes = ['Iron Man', 'Flash', 'Batman', 'Hulk']
// console.log(superHeroes.length);

/***** If we put <= superHeroes.length then it give last value "undefined" ******/
for (let index = 0; index < superHeroes.length; index++) {
    const element = superHeroes[index];
    // console.log(element);

}


// for (let i = 1; i < 10; i++) {

//     if(i === 5) {
//         console.log(`${i} is detected`);
//         break
//     }
//    console.log(i);
// }

for (let i = 1; i < 10; i++) {

    if(i === 5) {
        console.log(`${i} is detected`);
        continue
    }
   console.log(i);
}