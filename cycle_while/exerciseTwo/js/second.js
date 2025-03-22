/*
name exrcice: second
description: calculate the weight of different planets
autor:camilo suaza
Date: March 20th, 2025
*/

function calcularPeso() {
    const gravedadTierra = 9.81;
    const gravedadMarte = 3.71;
    const gravedadJupiter = 24.79;
    
 
let sumTotal = 0;
    let calculations = 0;
    
    while (true) {
        let mass = parseFloat(prompt("Enter the mass of the object (negative - positive to exit):"));
        
        if (mass < 0) {
            break;
        }
        
        let opcion = parseInt(prompt("Select a planet with its number:n1. Earthn2. Marsn3. Jupiter"));
        let gravedad;

        switch (opcion) {
            case 1:
                gravedad = gravedadTierra;
                break;
            case 2:
                gravedad = gravedadMarte;
                break;
            case 3:
                gravedad = gravedadJupiter;
                break;
            default:
                alert("Invalid option, try again.");
continue;
        }
        
        let weight = mass * gravedad;
        sumTotal += weight;
        calculations++;

        console.log(`Weight on the selected planet: ${weight.toFixed(2)} N`);
    }
    
    console.log(`Total sum of calculated weights: ${sumTotal.toFixed(2)} N`);
    console.log(`Calculations made: ${calculations}`);
}

calcularPeso();
