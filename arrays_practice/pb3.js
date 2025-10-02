/*
3. Adding & Removing Elements
=> Add 100 at the end and 0 at the beginning of the array [1,2,3,4,5].
=> Remove the first and last elements from the array [10,20,30,40,50].
=> Remove 2 elements starting from index 1 and insert 99, 100 at the same position in [1,2,3,4,5].
*/

const nums = [1, 2, 3, 4, 5];
nums.push(100); // push()
console.log(nums);
nums.unshift(0); // unshift()
console.log(nums);

const nums2 = [10, 20, 30, 40, 50];
nums2.pop(); // pop()
console.log(nums2);
nums2.shift(); // shift()
console.log(nums2);

const nums3 = [1, 2, 3, 4, 5];
// splice(start, deleteCount, item1);
nums3.splice(1, 2, 99, 100);
console.log(nums3);

