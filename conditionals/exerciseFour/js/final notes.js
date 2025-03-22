/*
	Name exercise: final note
	Description: final grade calculations    
        calculations:Calculate the percentages 
	Autor: camilo suaza
	Date: march 19th 2025
*/



let gradeOne=3.2;
let gradeTwo=4.3;
let gradeThree=2.8;
let gradeOnePorc=0.20;
let gradeTwoPorc=0.35;
let gradeThreePorc=0.45;
let porcOne;
let porcTwo;
let porcThree;
let gradeFi;

porcOne= gradeOne*gradeOnePorc;
porcTwo= gradeTwo*gradeTwoPorc;
porcThree= gradeThree*gradeThreePorc;

gradeFi= porcOne+porcTwo+porcThree;



if(gradeFi>4.5){
	console.log("top grade");
}
else if(gradeFi>3.5 && gradeFi<4.5){
	console.log("good grade");
}
else if(gradeFi>3 && gradeFi<3.5){
        console.log("avarage grade");
}
else{ 
        console.log("bad grade");
}


     


