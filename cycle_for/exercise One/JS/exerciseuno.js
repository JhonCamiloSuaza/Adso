/*
	Name exercise: alculate the resultant force
	Description: alculate the resultant force
	Autor: camilo suaza	
        Date: March 21th, 2025
*/

let mass = 43;
let acceleration = 5;
let force;
let number = 5;

for (let counter = 1; counter <= number; counter++) {
    force = mass * acceleration;
    console.log(`iteracion ${counter}: force = ${force}`);
}