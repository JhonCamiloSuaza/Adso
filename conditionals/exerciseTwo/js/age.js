/*
   name exercise: age
   description: areaTwo is the greatest
   author: camilo Suaza
   date: march 19th, 2025
*/

let ageOne = 20;
let ageTwo = 15;
let ageThree = 18;

// Comprobación de cada edad
if (ageOne >= 18) {
    console.log("AgeOne is of legal age");
} else {
    console.log("AgeOne is a minor");
}

if (ageTwo >= 18) {
    console.log("AgeTwo is of legal age");
} else {
    console.log("AgeTwo is a minor");
}

if (ageThree >= 18) {
    console.log("AgeThree is of legal age");
} else {
    console.log("AgeThree is a minor");
}

// Calculate the average age
let averageAge = (ageOne + ageTwo + ageThree) / 3;

if (averageAge >= 18) {
    console.log("The average age is for adults");
} else {
    console.log("The average age is older");
}