/*
	Name exercise: motion simulation
	Description: motion simulation
	Autor: camilo suaza
	Date: march 21th 2025
*/


function calculateFrictionForce(mass, frictionCoefficient, gravity = 9.81) {
    
    let normal = mass * gravity;

   
    let frictionForce = frictionCoefficient * normal;

    return frictionForce;
}


let mass = 10;  // Masa en kg
let frictionCoefficient = 0.5;  

let force = calculateFrictionForce(mass, frictionCoefficient);
console.log("Fuerza de friccion:", force,);


