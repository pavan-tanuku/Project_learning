/*
1. Write a for loop that loops through the array
`["green tea", "black tea", "chai", "oolong tea"]` and
stops the loop when it finds "chai".
store all teas before "chai" in a new array named `selectedTeas. 
*/

// const arr = ["green tea", "black tea", "chai", "oolong tea"];
// const selectedTeas = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== "chai") {
//         selectedTeas.push(arr[i]);
//     } else {
//         break;
//     }
// }
// console.log(arr);
// console.log(selectedTeas);


/*
2. Wrote a for loop that loops through the array
`["London", "New York", "Paris", "Berlin"]` and skips
`Paris`.
store the other cities in a new array named `visitedCities`.
*/

// let cities = ["London", "New York", "Paris", "Berlin"];
// let visitedCities = [];
// for (let i = 0; i < cities.length; i++) {
//     if (cities[i] === "Paris")
//         continue;
//     visitedCities.push(cities[i]);
// }
// console.log(cities);
// console.log(visitedCities);


/**
 * 3. Use a `for-of` loop to iterate through the array 
 * `[1, 2, 3, 4, 5]` and stop when the number 4 is found.
 * store the numbers before `4` in an array named `smallNumbers`.
 */

// let arr = [1, 2, 3, 4, 5];
// let smallNumbers = [];
// for (let num of arr) {
//     if (num === 4)
//         break;
//     smallNumbers.push(num);
// }
// console.log(smallNumbers);


/**
 * 4. Use a for-of loop to iterate through the array
 * `["Chai", "green tea", "herbal tea", "black tea"]`
 * and skip "herbal tea".
 * store the other teas in an array named `preferred Teas`.
 */

// let arr = ["Chai", "green tea", "herbal tea", "black tea"];
// let preferred = [];
// for (let word of arr) {
//     if (word === "herbal tea")
//         continue;
//     preferred.push(word);
// }
// console.log(preferred);


/**
 * 5. Use a for-in loop to loop through an object containing city populations.
 * stop the loop when the population of "Berlin" is found and store all previous
 * cities population in a new object named 'cityPopulations'.
 * 
 * let citiesPopulation = {
 *  "London": 8900000,
 *  "New York": 8400000,
 *  "Paris" : 2200000,
 *  "Berlin": 3500000
 * };
 * 
 */

// this is an object
// let citiesPopulation = {
//     "London": 8900000,
//     "New York": 8400000,
//     "Paris" : 2200000,
//     "Berlin": 3500000
// };

// let cityNewPopulations = {};
// // console.log(Object.keys(citiesPopulation));
// // console.log(Object.values(citiesPopulation));

// // we access the keys of an object using the for-in loop
// for (const city in citiesPopulation) {
//     console.log(city);
// }

// // to access the values using for-in use only [] like in arrays
// for (const city in citiesPopulation) {
//     console.log(citiesPopulation[city]);
// }

// for (const city in citiesPopulation) {
//     // key = value
//     if (city === "Berlin") {
//         break;
//     }
//     cityNewPopulations[city] = citiesPopulation[city];
// }
// console.log(cityNewPopulations);

/*
 6. Use a for-in loop to loop through an object containing city populations.
 skip any city with a population below 3 million and store the
 rest in a new object named `largeCities`.

 let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
 }
 
 */

// let worldCities = {
//     Sydney: 5000000,
//     Tokyo: 9000000,
//     Berlin: 3500000,
//     Paris: 2200000,
// };
// let largeCities = {};

// for (city in worldCities) {
//     if (worldCities[city] < 3000000)
//         continue;
//     largeCities[city] = worldCities[city];
// }
// console.log(largeCities);


/*
7. write a forEach loop that iterates through the array
`["earl grey", "green tea", "chai", "oolong tea"]`.
stop the loop when "chai" is found, and store all previous
tea types in an array named `availableTeas`.

*/

// forEach is only applicable for arrays
// let teasCollection = ["earl grey", "green tea", "chai", "oolong tea"];
// let availableTeas = [];
// // teasCollection.forEach((val, index) => {
// //     console.log(`The value is '${val}' and index is '${index}'.`);
// // });
// teasCollection.forEach(tea => {
//     if (tea === "chai")
//         return;
//     availableTeas.push(tea);    
// });
// console.log(teasCollection);
// console.log(availableTeas);

/*
8. write a forEach loop that iterates through the array
`["Berlin", "Tokyo", "Sydney", "Paris"]`.
skip "Sydney" and store the other cities in a new array
named `traveledCities`.
*/

// let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
// let traveledCities = [];
// cities.forEach((city) => {
//     if (city === "Sydney")
//         return;
//     traveledCities.push(city);
// })
// console.log(cities);
// console.log(traveledCities);


/*
9. write a for loop that iterates through the array
`[2, 5, 7, 9]`.
Skip the value `7` and multiply the rest by 2. 
Store the results in a new array named `doubledNumber`. 
*/

// let arr = [2, 5, 7, 9];
// let mulArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 7)
//         continue;
//     mulArr.push(arr[i] * 2);
// }
// console.log(arr);
// console.log(mulArr);


/*
10. Use a for-of loop to iterate through the array
`["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`
and stop when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named `shortTeas`.
*/

let teasCollection = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of teasCollection) {
    if (tea.length > 10) {
        break;
    } else {
        shortTeas.push(tea);
    }
}

console.log(teasCollection);
console.log(shortTeas);