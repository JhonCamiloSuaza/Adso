/*
	Name exercise: exercise six
	Description: comparison of two bodies in free fall.
	Autor: camilo suaza
	Date: march 19th 2025
*/

let massOne;
let massTwo;
let gravity=9.81;
let forceOne;
let forceTwo;

massOne=parseFloat(prompt("enter the mass One:"));
massTwo=parseFloat(prompt("enter the mass One:"));

forceOne= massOne*gravity;
forceTwo= massTwo*gravity;


if(forceOne==forceTwo){
	console.log("Are equals forces");
}
else if(forceOne>forceTwo){
	console.log("force one majeure");
}
else{
	console.log("force two majeure");
}




