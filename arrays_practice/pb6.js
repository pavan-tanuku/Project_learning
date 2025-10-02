/*
6. Transforming Arrays
=> Join the array ['I','love','JS'] into a string separated by spaces.
=> Merge [1,2,3] and [4,5,6] into one array.
=> Flatten [1,[2,3],[4,[5,6]]] into a single array.
=> For [1,2], create [1,2,2,4] using flatMap.
=> Reverse [1,2,3,4,5] without using loops.
=> Sort [5,2,9,1,5] in ascending order.
*/

// join(separator) => Converts array to string.
const arrayToString = ["I", "love", "JS"];
let str = arrayToString.join(" ");
console.log(str);

// cancat(arr2) => merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArray = arr1.concat(arr2);
console.log(mergeArray);

// Float32Array(depth) => Flatten nested arrays
const array = [1, [2, 3], [4, [5, 6]]];
// level 0 = 1
// level 1 = 1,2,3,4 (opens upto 1st level)
// level 2 = 1,2,3,4,5,6 (opens upto 2nd level which is [5,6])
console.log(array);
const flattenArray = array.flat(Infinity) // when you don't know how depth the nested is.
const flattenDepth_1 = array.flat(); //by default it is level 1
const flattenDepth1 = array.flat(1);
const flattenDepth2 = array.flat(2);

console.log(flattenArray);
console.log(flattenDepth_1);
console.log(flattenDepth1);
console.log(flattenDepth2);


// flatMap(callback) => Map and Flatten in one step
// by default in flatMap() it takes leve1 as default depth for flat()
const arr = [1, 2]; // o/p = [1, 2, 2, 4]
/*
1st map() computes then flat()
internal operations:
map((x) => {
    return [x, x*2];
});
o/p: [[1,2],[2,4]]
flat(1) / flat() ==> lavel 1 by default
// if you want to use depth > 1 then use flat() and map() separately
flat();
o/p: [1, 2, 2, 4] (removes 1st level)

*/

// note: map return's array. 
// if you use flatMap(), you only give map() operation inside the flatMap()
const clearArray = arr.flatMap((x) => {
    return [x, x * 2];
});
console.log(clearArray);

// reverse() => Reverse array in-place
const arr4 = [1, 2, 3, 4, 5];
const reverseArr2 = arr4.reverse();
console.log(reverseArr2);

// sort(callback) => Sort array
const arr5 = [5, 2, 9, 1, 5];
// a-b => ascending
// b-a => descending
// difference is positive then swap
// difference is negative then no-swap
// difference is 0 then it is in original position
const ascendingSort = arr5.sort((a, b) => {
    return a - b;
});
console.log(ascendingSort);
