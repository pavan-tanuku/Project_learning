/*
9. Multi-dimensional & Nested Arrays
=> Access the element 3 from [[1,2],[3,4]].
=> Flatten [1,[2,[3,[4]]]] into [1,2,3,4].
=> Print all elements of [[1,2],[3,4],[5,6]] using nested forEach.
*/

let twoD_Array = [[1, 2], [3, 4]];
console.log(twoD_Array[1][0]);

let arr = [1, [2, [3, [4]]]];
let flatten = arr.flat(3);
console.log(flatten);

let arr1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
arr1.forEach((i) => {
    /*return*/ i.forEach((y) => { // we don't require 'return'
        console.log(y);
    })
});

