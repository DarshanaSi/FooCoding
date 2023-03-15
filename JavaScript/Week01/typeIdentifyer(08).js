function checkSameType(variable1, variable2) {
  if (typeof variable1 === typeof variable2){
    console.log(variable1 + " and " + variable2 + " are 'SAME TYPE'");
  }
  else{
    console.log(variable1 + " and " + variable2 + " are 'NOT SAME TYPE'");
  }
}

let age = 1;
let name = "Darshana";
let status = false;
let location = "Sweden";

console.log("Value of my variable age is: " + age);
console.log("Value of my variable name is: " + name);
console.log("Value of my variable status is: " + status);
console.log("Value of my variable location is: " + location);

checkSameType(age, name);
checkSameType(age, status);
checkSameType(age, location);
checkSameType(status, name);
checkSameType(location, name);
checkSameType(location, status);
