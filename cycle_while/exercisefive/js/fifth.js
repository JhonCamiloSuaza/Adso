/*
name exrcice: fifth
description:mechanical work calculations
autor: camilo suaza
Date: March 20th, 2025
*/
let totalSum = 0; 
let calculations = 0;

while (true) {
    
    let distance = parseFloat(prompt("Enter the distance traveled (Enter a negative value to exit):"));

    
    if (distance < 0) {
        console.log("Finalizing the calculation...");
        break;
    }

   
    let appliedForce = parseFloat(prompt("Enter the applied force (N):"));

 
    if (distance > 0 && appliedForce > 0) {
               let mechanicalWork = appliedForce * distance;

      
        totalSum += mechanicalWork;

      
        calculations++;

 
        console.log(`Calculations ${calculations}:`);
        console.log(`Mechanical work in this execution:${mechanicalWork.toFixed(2)} J`);
        console.log(`Total sum of mechanical work: ${totalSum.toFixed(2)} J\n`);
    } else {
        console.log("The distance and force must be greater than 0 to calculate mechanical work.");
    }
}


console.log("\nFinal Summary:");
console.log(`Total number of calculations performed: ${calculations}`);
console.log(`Total cumulative mechanical work: ${totalSum.toFixed(2)} J`);

