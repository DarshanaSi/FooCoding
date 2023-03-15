multipleTypes = ["Dog", "Cat", 123, false]

/*We can check the infinite numbers in JS, 
but we cannot use === to check the equality
since it's not precisely equal in mathematically.*/

console.log(!Number.isFinite(6/0) && !Number.isFinite(10/0)); 