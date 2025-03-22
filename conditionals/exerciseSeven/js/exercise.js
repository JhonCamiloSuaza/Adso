/*
	Name exercise: Calculating the Friction of an Object on a Surface
	Description: frictional force between an object and the surface on which it moves
	Autor: camilo suaza
	Date: march 19th 2025
*/

let mass;
let coeFric;
let gravity=9.81;
let forceNor;
let forceFriction;


mass= parseFloat(prompt("ingrese la masa"));
coeFric= parseFloat(prompt("ingrese el coefciente"));

forceNor= mass*gravity;
forceFriction= coeFric*forceNor;



if(forceFriction>50){
	console.log("friction higt");
}
else{
	console.log("friction is low");
}
