/*
	Name exercise: Calculating the acceleration of an object subjected to a force.
	Description: calculating the acceleration
	Autor: camilo suaza
	Date: march 19th 2025
*/

let massObject;
let appliedForce;
let acceleration;

massObject = parseFloat(prompt("Ingrese la masa del objeto (kg):"));
appliedForce = parseFloat(prompt("Ingrese la fuerza aplicada del objeto (N):"));

acceleration = appliedForce / massObject;

if (acceleration > 5) {
  console.log("acceleration is high");
} else {
  console.log("acceleration is low");
}