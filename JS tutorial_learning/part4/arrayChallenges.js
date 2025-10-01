let teaFlavours = ["green tea", "black tea", "oolong tea"];
const firstTea = teaFlavours[0];
// console.log("The first tea is " + firstTea);

// another way to declare an Array
// let teaFlavours = new Array("green tea", "black tea", "oolong tea")

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

let citiesVisited = ["Mumbai", "Sydney"];
// console.log(citiesVisited);
citiesVisited.push("Berlin");
// another way
//citiesVisited[2] = "Berlin"; // we can only use when we know the length
//citiesVisited[citiesVisited.length] = "Berlin";
// console.log(citiesVisited);

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
// console.log(teaOrders);
const lastOrder = teaOrders.pop();
// console.log(`The last order is '${lastOrder}'`);
// console.log(teaOrders);

let popularTea = ["green tea", "orange tea", "chai"];
// if i manipulate popularTea then it also results to softCopyTea;
popularTea.pop();
// console.log(popularTea);
let softCopyTea = popularTea; // copy
// console.log(softCopyTea);

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities]; //one of the way to create hard copy
// which means if i manipulate the topCities it wont results to hard copy
// another way is using slice method
// let hard_copy = topCities.slice();
topCities.pop();
// console.log(topCities);
// console.log(hardCopyCities);
// console.log(hard_copy);

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities + asianCities;
// console.log(worldCities);
// console.log(typeof worldCities);

let worldCitiesArray = europeanCities.concat(asianCities);
// console.log(worldCitiesArray);


let teaMenu = ["masala chai", "oolong tea", "green tea", "earl tea"];
let menuLength = teaMenu.length;
// console.log(menuLength);


let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondon = false;
if (cityBucketList.includes("london")) { // checking case sensitive
    isLondon = true;
} 
console.log(isLondon);
