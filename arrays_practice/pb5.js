/*
5. Iterating Over Arrays
=> Print all elements of [1,2,3,4,5] using forEach.
=> Create a new array containing squares of [1,2,3,4,5] using map.
=> Sum all numbers in [1,2,3,4,5] using reduce.
=> Check if all numbers in [2,4,6,8] are even using every.
=> Check if at least one number in [1,3,5,8] is even using some.
*/

// forEach(callback) => executes function for each element.
const nums1 = [1, 2, 3, 4, 5];
nums1.forEach((x) => {
    console.log(x);
}); //forEach

// map(callback) => returns a new array with results.
const nums2 = [1, 2, 3, 4, 5];
let double = nums2.map((x) => {
    return x*x; // when we use {} we need to use return to get array `double`, otherwise use console.log() for each element but it wont return array.
});
console.log(nums2);
console.log(double);


// reduce(callback, initial) => reduce array to single value.
const nums3 = [1, 2, 3, 4, 5];
let total = nums3.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);
console.log(total);
 

// every(callback) => Returns true if all pass test.
const nums4 = [2, 4, 6, 8];
let isEven = nums4.every((x) => {
    return x % 2 == 0;
});
console.log(isEven);


// some(callback) => Returns true if at least one passes.
const nums5 = [1, 3, 5, 8];
let isAtLeastOneEven = nums5.some((x) => {
    return x % 2 == 0;
})
console.log(isAtLeastOneEven);
