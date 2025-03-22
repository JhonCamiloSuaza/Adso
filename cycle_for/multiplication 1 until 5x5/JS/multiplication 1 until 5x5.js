	Nameexercise:multiplication 1 until 5x5
	Description:multiplication 1 until 5x5
	Autor: camilo suaza
	Date: March 21th,2025

let multiply = 1;
let number = 5;

for (let counter = 1; counter <= number; counter++) {
    multiply *= counter;  // Multiply by the current counter value
    
    // Check if the product (multiply) is even or odd
    if (multiply % 2 === 0) {
        console.log("buzz");
    } else {
        console.log("bass");
    }
}