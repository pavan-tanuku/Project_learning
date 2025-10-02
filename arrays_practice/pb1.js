/*
1. Creating and Checking Arrays:
=> Create an array of 5 student names using array literal and check if it is an array.
=> Create an empty array of length 4 using new Array() and fill it with zeros.
*/

let students = ["Pavan", "Mani", "Sankar", "Karthik", "Pavan Mani Sankar"];
console.log(`Does the students is an array? ${Array.isArray(students)}.`); // Array.isArray()

const empArray = new Array(4);
empArray.fill(0); // fill()
console.log(empArray);
