/*
	Name exercise: exercisefive
	Description: determine the force of an object and compare it to a limit.
	Autor: camilo suaza
	Date: march 19th 2025
*/

let mass;
let acceleration;
let force;
let number;

mass = parseFloat(prompt("Ingrese la masa (kg):"));
acceleration = parseFloat(prompt("Ingrese la aceleracion (m/s2):"));

force= mass*acceleration;

if(force>=50){
	console.log("the force is higb");
}
else{
	console.log("the force is low");
}




