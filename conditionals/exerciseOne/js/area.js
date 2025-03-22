/*
  name exercise:area
  description:compare three area
  author:camilo suaza
  Date: march 19th 2025
*/

let areaOne = 10;
let areaTwo = 15;
let areaThree = 11;

if (areaOne === areaTwo && areaTwo === areaThree) {
    console.log("All areas are equal");
} else if (areaOne > areaTwo && areaOne > areaThree) {
    console.log("areaOne is the greatest");
} else if (areaTwo > areaOne && areaTwo > areaThree) {
    console.log("areaTwo is the greatest");
} else if (areaThree > areaOne && areaThree > areaTwo) {
    console.log("areaThree is the greatest");
} else if (areaOne === areaTwo && areaOne > areaThree) {
    console.log("areaOne and areaTwo are equal and greater than areaThree");
} else if (areaOne === areaThree && areaOne > areaTwo) {
    console.log("areaOne and areaThree are equal and greater than areaTwo");
} else if (areaTwo === areaThree && areaTwo > areaOne) {
    console.log("areaTwo and areaThree are equal and greater than areaOne");
}