 /*
    name exercise: salary
    description: calculate salary
    author: camilo suaza
    march 19th 2025
*/

let dayValue 
let dayWorked 
let salary = dayWorked * dayValue;

let health = salary * 0.12;
let pension = salary * 0.16;
let arl = salary * 0.052;
let discount = health + pension + arl;
let netSalary = salary - discount;

console.log("Salary:", salary);
console.log("Health Deduction:", health);
console.log("Pension Deduction:", pension);
console.log("ARL Deduction:", arl);
console.log("Total Discount:", discount);
console.log("Net Salary:", netSalary);