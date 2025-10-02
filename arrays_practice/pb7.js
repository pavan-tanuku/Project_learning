/*
7. Array Utilities
=> Fill [0,0,0,0,0] from index 1 to 3 with 7.
=> Copy last two elements of [1,2,3,4,5] to the start using copyWithin.
=> Access the last element of [10,20,30] using at().
*/

let arr = [0, 0, 0, 0, 0];
let arr1 = arr.fill(7, 1, 4); // .fill(replaceElement, start, end) (end is exclusive).
console.log(arr1);

// copyWithin(target, start, end) => Copies part of array
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
arr2.copyWithin(0, 3, 5);
console.log(arr2);


// at(index) Get element at index (supports negative)
let arr3 = [10, 20, 30];
const le = arr3.at(-1);
console.log(le);
