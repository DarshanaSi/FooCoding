//2.1

function foo(func) {
  // What to do here?
  func();
}

function bar() {
  console.log("Hello, I am bar!");
}

foo(bar);

//2.2
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (var i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  numbers.forEach(function (val) {
    if (val % 3 === 0 && val % 5 === 0) {
      threeCallback(val);
      fiveCallback(val);
    } else if (val % 3 === 0) {
      threeCallback(val);
    } else if (val % 5 === 0) {
      fiveCallback(val);
    }
  });
}

function threeCallback(val) {
  console.log(`${val} is divisible by 3`);
}

function fiveCallback(val) {
  console.log(`${val} is divisible by 5`);
}

threeFive(10, 15, threeCallback, fiveCallback);

// threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,12.14,15]
// and call sayFive, sayThree, sayThree, sayFive
// please make sure you see why these calls are made before you startIndex coding

//2.6
const arr = [1, 2, 3];

const arr2d = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flattenedArr = arr2d.flat();
// const flattenedArr = [1, 2, 3, 4, 5, 6];
console.log(flattenedArr);

//2.7
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

//here x is a primitive value and it's a const. Hence the value cannot be changed.
//here y is a referencing value and here the x is a key of the object. Hence the value of x can be reassinged.

//3.0
function createBase(base) {
  return function (num) {
    return base + num;
  };
}

const addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

//Bonus
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

const arr = ["a", "b", "c", "d", "a", "e", "f", "c"];
const uniqueArr = removeDuplicates(arr);
console.log(uniqueArr);

//4.0
