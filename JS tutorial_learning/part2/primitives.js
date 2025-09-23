// // Number

// let balance = 120;
// console.log(balance);
// console.log(typeof(balance)); //getting what type of data
// console.log();

// // the below is not recommended way
// // another way to create a number but it's an object
// let anotherBalance = new Number(120);
// console.log(anotherBalance);
// console.log(typeof(anotherBalance)); //getting what type of data
// console.log(anotherBalance.valueOf()); //compare line 10 and line 12
// console.log();
// console.log();


// // checking variable balance and anotherBalance
// console.log(`balance is a  '${typeof balance}'`);
// console.log(`anotherBalance is a '${typeof anotherBalance}'`);

// // boolean
// let isActive = true;
// let isReallyActive = new Boolean(true); //not recommended way


// // null and undefined
// let firstName;// it is defined but value is not assigned
// console.log(firstName); //undefined

// let middleName = undefined;
// console.log(middleName); //undefined

// let lastName = null;
// console.log(lastName); //null


// // string
// let myString = "Hello";
// let myString2 = 'Hola';
// let userName = `Pavan Mani Sankar`;

// let oldGreet = myString + ' ' + userName;
// console.log(oldGreet);
// let newGreet = `Hello ${userName}!`; //template string
// console.log(newGreet);
// let demo = `Value is ${2 + 2}`;
// console.log(demo);

// symbol
// it generates a unique value
let id = Symbol('123');
let id2 = Symbol('123');
console.log(id);
console.log(id === id2);

let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1);
console.log(sym1 === sym2); //false because both are unique
console.log(typeof (sym1));
