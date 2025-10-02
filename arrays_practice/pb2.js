/*
2. Accessing and Modifying Elements
=> Given an array [10, 20, 30, 40, 50], replace the third element with 100.
=> Access the last element of an array ['apple', 'banana', 'cherry'] without using length directly.
*/

let num = [10, 20, 30, 40, 50];
num[2] = 100; // []
console.log(num);

const fruits = ["apple", "banana", "cherry"];
console.log(fruits.at(-1)); // at()
