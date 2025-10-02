/*
4. Searching and Finding Elements
=> Find the first index of 5 in [1,2,3,4,5,5] and last index of 5.
=> Check if the array [1,2,3,4] contains 3 and contains 7.
=> Return all numbers greater than 10 from [5,12,8,20,15] using filter.
=> Find the first number greater than 10 in [5,12,8,20,15].
*/

const nums1 = [1, 2, 3, 4, 5, 5];
let firstIndex = nums1.indexOf(5); // indexOf()
console.log(firstIndex);
let lastIndex = nums1.lastIndexOf(5); //lastIndexOf();
console.log(lastIndex);

const nums2 = [1, 2, 3, 4]
console.log(`Does the element 3 contains in nums2: ${nums2.includes(3)}`); // includes()
console.log(`Does the element 7 contains in nums2: ${nums2.includes(7)}`);

// filter(callback) => Returns array of all matches.
const nums3 = [5, 12, 8, 20, 15];
let filtered = nums3.filter(x => x > 10); //filter()
console.log(`Elements greater than 10 is: `);
console.log(filtered);

// find(callback) => returns first element matching condition.
const nums4 = [5, 12, 8, 20, 15];
let firstNum = nums4.find(x => x > 10); //find()
console.log(firstNum);
