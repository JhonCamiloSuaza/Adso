/*
name exrcice: third
description:calculate Newton's third law (action and reaction)
autor: camilo suaza
Date: March 20th, 2025
*/

let sumTotal = 0;
let calculations = 0;

while (true) {
        let appliedForce = parseFloat(prompt("Enter the applied force (0 or a negative number to exit):"));

 
    if (appliedForce <= 0) {
        console.log("End of the program.");
        break;
    }

  
    let reactionForce = -appliedForce;


    console.log(`The reaction force is: ${reactionForce}`);

 
    sumTotal += appliedForce;


    calculations++;
}


console.log(`nTotal sum of forces applied ${sumTotal}`);
console.log(`Number of calculations performed: ${calculations}`);
