/*
name exrcice: fourth
description: Motion simulation with Newton's first law
autor: camilo suaza
Date: March 20th, 2025
*/
let sumTotal = 0;
let time = 0; 
let speed = 1; 


let mass = parseFloat(prompt("Enter the Object Mass(kg):"));


if (mass <= 0 || isNaN(mass)) {
    console.log("The mass must be a positive value.");
} else {
    while (true) {
        
        let force = parseFloat(prompt("Enter the applied force (N) (Enter 0 to finish):"));

        if (force === 0) {
            console.log("The object has stopped moving.");
            break;
        }

               let acceleration = force / mass;


            speed += acceleration * 1;

        
        let distance = speed * 1;

       
        sumTotal += distance;

        time++;

       
        console.log(`Elapsed time: ${time} s`);
        console.log(`Acceleration: ${acceleration.toFixed(2)} m/s²`);
        console.log(`Current Speed: ${speed.toFixed(2)} m/s`);
        console.log(`Distance traveled in this second: ${distance.toFixed(2)} m`);
        console.log(`Total distance traveled: ${sumTotal.toFixed(2)} m\n`);
    }

   
    console.log("\nFinal Summary:");
    console.log(`Total Time on the Move: ${time} s`);
    console.log(`Total distance traveled: ${sumTotal.toFixed(2)} m`);
}
