/*
8. Array Conversion
=> Convert the string 'hello' into an array of characters using Array.from.
=> Create an array [1,2,3] using Array.of.
=> Convert [1,2,3] into a string using toString().
*/


// Array.from(iterable) => converts iterable to array.
let str = "hello";
let arr1 = Array.from(str);
console.log(arr1);

// Array.of(element1, ...) => Creates array from arguments
let arr2 = Array.of(1, 2, 3);
console.log(arr2);

// toString() => converts to string
let arr3 = [1, 2, 3];
let str1 = arr3.toString();
console.log(str1);

