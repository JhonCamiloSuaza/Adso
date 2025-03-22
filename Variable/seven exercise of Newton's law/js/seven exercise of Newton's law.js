/*
    Name exercise: seven exercises
    Description: seven exercises
    Author: camilo suaza
    Date: March 17th, 2025
*/

let weaponMass = 5;  
let bulletMass = 2;
let bulletSpeed = 3;

// Calculate recoil speed based on conservation of momentum
let recoilSpeed = (bulletMass * bulletSpeed) / weaponMass;

// Calculate the total recoil effect (if that's what you meant by "less")
let less = recoilSpeed + recoilSpeed;

console.log("Weapon Mass:", weaponMass);  
console.log("Bullet Mass:", bulletMass);  
console.log("Bullet Speed:", bulletSpeed);  
console.log("Recoil Speed:", recoilSpeed);
console.log("Recoil Effect (less):", less);