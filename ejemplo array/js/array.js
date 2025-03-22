/*
 Name: array
 Description: array
 Author: camilo suaza
 Date: 20 of March of 2025


*/

let vector=[];
let iteration;
let number;
for(iteration=0;iteration<10;iteration++){
	number=Math.floor(Math.random()*100);
	vector.push(number);
}

console.log(vector);

let maximo=Math.max(...vector);
let minimo=Math.min(...vector);

console.log("maximo : "+maximo);
console.log("minimo : "+minimo);

for(iteration=0;iteration<vector.length;iteration++){
	console.log(vector[iteration]);

	
	
	if(vector[iteration]%2==0){
		console.log("pair");
	}
	else{
		console.log("odd");
	}

	
}
