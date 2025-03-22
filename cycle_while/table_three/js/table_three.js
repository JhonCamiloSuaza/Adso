/*
name exrcice: table 1 until 5
description: tables 1 until 5
autor: camilo suaza
Date: March 20th, 2025
*/

let table = 1;
let bass = 0;
let buzz = 0;
let counter;
let result;


while (table <= 5) {
    counter = 1; 

   
    while (counter <= 5) {
        result = table * counter;


        if (result % 2 == 0) {
            console.log(`${table} x ${counter} = ${result} "buzz"`);
            buzz++;
        } else {
            console.log(`${table} x ${counter} = ${result} "bass"`);
            bass++;
        }

        counter++; 
    }

    table++; 
}

console.log(`Total buzz (pares): ${buzz}`);
console.log(`Total bass (impares): ${bass}`);
