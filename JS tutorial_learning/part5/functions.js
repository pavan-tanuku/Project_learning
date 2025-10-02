/*
1. Write a function named `makeTea` that takes one parameter,
`typeOfTea`, returns a string like `"Making green tea"` when called
with `"green tea"`.
Store the result in a variable named `teaOrder`.
*/

// function makeTea(typeOfTea) {
//     return `Making ${typeOfTea}`;
// }
// let teaOrder = makeTea("green tea");
// console.log(teaOrder);


/*
2. Create a function named `orderTea` that takes one
parameter, `teaType`. Inside this function, create
another function named `confirmOrder` that returns a 
message like `"Order confirmed for chai"`.
Call `ConfirmOrder` from within `orderTea` and return the 
result.
*/

// function orderTea(teaType) {
//     function conformOrder() {
//         return `Order confirmed for ${teaType}.`
//     }
//     return conformOrder();
// }

// let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);


/*
3. Write an arrow function named `calculateTotal` that
takes two parameters: `price`, and `quantity`. The 
function should return the total cost by multiplying
the `price` and `quantity`.
Store the result in a variable named `totalCost`.
*/

// const calculateTotal = (price, quantity) =>  price * quantity;

// let totalCost = calculateTotal(10, 5);
// console.log(totalCost);


/*
4. Write a function named `processTeaOrder` that makes
another function, `makeTea`. as a parameter and calls it
with the argument `"earl grey"`.
Return the result of calling `makeTea`.
*/

// Higher Order function - A higher-order function is a function that accepts another function as an argument or returns a function.

// CallBack function - A callback function is the function passed to a HOF to be executed later.

// makeTea => CallBack functions
// function makeTea(typeOfTea) {
//     return typeOfTea;
// }

// // processTeaOrder => Higher Order function
// function processTeaOrder(teaFunction) {
//     return teaFunction("earl grey"); //returning a function.
// }

// let order = processTeaOrder(makeTea); //giving function as a argument.
// console.log(order);

/*
5. Write a function named `createTeaMaker` that returns
another function. The returned function should take one
parameter, `teaType`, and return a message like `"Making green tea"`.
Store the returned function in a variable named 
`teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker() {
    return function (teaType) {
        return `Making ${teaType}`;
    };
}

let teaMaker = createTeaMaker();
// createTeaMaker returning function, it was stored in teaMaker. so, teaMaker is a function.
let result = teaMaker("green tea")
console.log(result);
