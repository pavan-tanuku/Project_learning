// we often assign const to object cuz object reference should not change (immutable) and we can change the properties of object 
const userName = {
    firstName: "Pavan",
    middleName: "Mani",
    "last Name": "Sankar",
    isLoggedIn: true
};

// userName.firstName = "Pavan Mani Sankar"; // .(dot) notation
// userName['last Name'] = "Sankar"; //bracket notation for keys with space

// console.log(userName);
// console.log(userName.firstName);
// console.log(typeof userName); //object

// // Arrays
// let anotherUser = ["shiva", true];
// console.log(anotherUser);
// console.log(anotherUser[0]);
// console.log(typeof anotherUser); //object


// implicit type conversions
console.log('5' + 5); //55
console.log('5' - 5); //0
console.log('5' * 5);
console.log('5' / 5);
console.log('5' > 1);
console.log('5' < 1);
console.log('5' == 5);

let isValue = true;
console.log(Number(isValue));
console.log(isValue + 5); //6
console.log(typeof (isValue + 1)); //boolean
// its better to do explicit type conversions
console.log(Number('5') + 5); //10
console.log(typeof (Number('5') + 5)); //number

let isValue2 = '1abc';
console.log(Number(isValue2)); //NaN
console.log(typeof (Number(isValue2))); //number
console.log(typeof NaN); //number

let isValue3 = "1";
console.log(Number(isValue3)); //1
console.log(Number(NaN));
console.log(Number(null));
console.log(Number(undefined));






