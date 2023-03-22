//Strings
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);

//Arrays
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log(
  "The splice() method allows you to add or remove elements from an array."
);
console.log(favoriteAnimals);
console.log(`The array has a length of: ${favoriteAnimals.length}`);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
let indexOfMeerkat = favoriteAnimals.indexOf("meerkat");
console.log(`The item you are looking for is at index: ${indexOfMeerkat}`);

//add numbers
function addNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

//color adjective
function colorCar(color) {
  console.log(`a ${color} car`);
}

//object and object print
let person = {
  name: "Darshana",
  age: 30,
};

function printObject(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

//vehicle type
function vehicleType(color, type) {
  if (type === 2) {
    console.log(`a ${color} motorbike`);
  } else if (type === 1) {
    console.log(`a ${color} car`);
  } else {
    console.log("Please select a type from 1 and 2");
  }
}

//Shorthand if-else
console.log(3 === 3 ? "yes" : "no");

//Add a new parameter
function vehicle(color, code, age) {
  const vehicleType = code === 1 ? "car" : "motorbike";
  const vehicleAge = age > 0 ? "used" : "new";
  console.log(`a ${color} ${vehicleAge} ${vehicleType}`);
}
vehicle("blue", 1, 5);

//Vehicle list
let vehicles = ["motorbike", "caravan", "bike", "car", "truck"];
const thirdElement = vehicles[2];
console.log(thirdElement);

//Change the code
function vehicleTwo(color, code, age) {
  let type = vehicles[code - 1];
  let vehicleAge = age > 0 ? "used" : "new";
  console.log(`a ${color} ${vehicleAge} ${type}`);
}
vehicleTwo("green", 3, 1);

//Advertisement
let advertisement = "Amazing Joe's Garage, we service ";

for (let i = 0; i < vehicles.length; i++) {
  advertisement += vehicles[i];
  if (i < vehicles.length - 2) {
    advertisement += ", ";
  } else if (i === vehicles.length - 2) {
    advertisement += " and ";
  } else {
    advertisement += ".";
  }
}

console.log(advertisement);

//Object
let emptyObject = {};

//Teachers and languages
const fooCoding = {
  teachers: ["Tommy", "Sahin"],
  languages: ["HTML5", "CSS3", "JavaScript"],
};

//
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

/*x === y will return false
because x and y are two different objects in memory,
even though they have the same values.*/

console.log(x == y); // true
console.log(x === y); // false
console.log(z == y); // true
console.log(z == x); // false

//Change object
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2.foo = "coding";
console.log(o3);
console.log(`o3 has changed on ${JSON.stringify(o3)}`);

o1.foo = "Malmö";
console.log(o3);
console.log(`o3 hasn't changed.`);

//Return of Typeof
let bar = 42;
typeof typeof bar;

console.log(
  ` typeof typeof bar returns string. first typeof returns "number" and second typeof returns "string"`
);
