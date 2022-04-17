// const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// let asc = foods.sort();

// console.log(asc);

// let des = foods.sort().reverse();
// console.log(des);

// const foodsWithUpperCase = [
//   "falafel",
//   "Sabich",
//   "hummus",
//   "pizza with extra pineapple",
// ];

// let withUpperDes = foodsWithUpperCase.sort().reverse();
// console.log(withUpperDes);

// let withUpperAsc = foodsWithUpperCase.sort();
// console.log(withUpperAsc);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

let asc = words.sort((a, b) => a.length - b.length);
console.log(asc);
