/*
name exrcice: sixth
description:calculations of gravitational energy
autor: camilo suaza
Date: March 20th, 2025
*/

let totalSum = 0; 
let calculations = 0;

while (true) {
   
    let height = parseFloat(prompt("Enter the height (m) of the object (Enter a negative value to exit):"));

       if (height < 0) {
console.log("Finalizing the calculation...");
        break;
    }

       let mass = parseFloat(prompt("Enter the mass (kg) of the object:"));
    
        let gravity = parseFloat(prompt("Enter the acceleration of gravity (m/s²):"));

    if (mass > 0 && height > 0 && gravity > 0) {
        
        let epg = mass * gravity * height;

                totalSum += epg;

       
        calculations++;


        console.log(`Calculations ${calculations}:`);
        console.log(`Gravitational Potential Energy in this run:${epg.toFixed(2)} J`);
        console.log(`Sum total of potential energy: ${totalSum.toFixed(2)} J\n`);
    } else {
        console.log("Mass, height, and gravity must be greater than 0 to calculate potential energy.");
    }
}


console.log("\nFinal Summary:");
console.log(`Total number of calculations performed: ${calculations}`);
console.log(`Total Accumulated Gravitational Potential Energy: ${totalSum.toFixed(2)} J`);
