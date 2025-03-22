/*
 Name: First Exercise
 Description: calculate the force with Newton's second law
 Author: camilo suaza
 Date: 20 of March of 2025
*/

let mass = 0;
let acceleration = 0;
let force = 0;
let counter = 0;

while (mass >= 0 && acceleration >= 0) {
    force = mass * acceleration;
    console.log(`Force: ${force}`);
    
   
    mass = parseFloat;
    acceleration = parseFloat;
    
    if (mass < 0 || acceleration < 0) {
        break; 
    }
    
    counter++;
    console.log(`Iteration: ${counter}`);
}








