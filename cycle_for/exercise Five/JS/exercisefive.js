/*
Name exercise: calculation of the tension of a rope
Description: calculation of the tension of a rope
	Autor: camilo suaza
	Date: march 21th 2025
*/


function calculateStrain(mass, gravity = 9.81, number) {
    let results = [];

    for (let counter = 0; counter <= number; counter++) {
        let strain = mass * gravity;
        results.push(`Iteracion ${counter}: Strain = ${strain.toFixed(2)} N`);
    }

    return results;
}


let mass = 10; 
let number = 5; 

let results = calculateStrain(mass, 9.81, number);


console.log(results.join("\n"));



