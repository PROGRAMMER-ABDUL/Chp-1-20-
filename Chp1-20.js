//task 1
function task1() {
    alert("Task 1: This is the first task.");
  }

//task 2
function task2() {
    alert("Task 2: This is the second task.");
  }

//task 3
function task3() {
    alert("Task 3: This is the third task.");
  }
  
// variable
var myVariableName = "example";

//task 1
var myVariable;
myVariable = "Hello, world!";

//task 2
var teamName = "Elite Devs";
alert(teamName);

//task 3
var bestMan = "Charlie";
bestMan = "John";


//task 1
var caseQty;

//task 2
caseQty = 144;

//task 3
var num = parseInt("9");

//task 4
var sum = 5 + 3;

//task 1
var productCost = 3.45;

//task 2
var nameofband;

//task 3
var myNumber = 42;

//task 4
var firstNameLastName = "JohnDoe";

/*Legal Names
1)myVariable
2)productCost
3)firstName
4)num1
*/

/*Illegal Names
1)123abc (starts with a number)
2)my-variable (contains a hyphen)
3)var (reserved keyword)
4)for (reserved keyword)
*/


var largeNum = 1000 * 2000;

var variable1 = 10;
var variable2 = 5;
var result = variable1 - variable2;

var remainderValue = 15 % 4;

var number1 = 5;
var number2 = 7;
var multiplicationResult = number1 * number2;
alert(multiplicationResult);

if (a === b || c !== d) {
    // Rest of the code
  }

  
  if (name === "Hamza" || name === "Arsalan") {
    // Rest of the code
  }
  
  if (age < 60) {
    // Rest of the code
  }

  var variable1 = 5;
  var variable2 = 10;
  
  if (variable1 < variable2 || variable1 > variable2) {
    alert("Variable 1 is either less than or greater than Variable 2.");
  }

  var firstName = "John";
  var lastName = "Doe";
  
  var userFirstName = prompt("Enter your first name:");
  var userLastName = prompt("Enter your last name:");
  
  if (userFirstName === firstName && userLastName === lastName) {
    alert("Your first and last name match the variables.");
  }
  

  var stringArray = ["Hello"];

  var alphabet = ["h", "i", "j", "k"];
  alert(alphabet[2]); // Outputs: "j"

  
  var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var arrayLength = alphabet.length;
console.log(arrayLength); // Outputs: 8

var myArray = ["First element"];
myArray[1] = "Second element";
alert(myArray[1]); // Outputs: "Second element"


var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes); // Outputs: ["M", "XL", "XXL", "XXXL"]

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes); // Outputs: ["S", "M", "L", "XL", "XXL", "XXXL"]

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);
console.log(reducedPets); // Outputs: ["duck", "frog"]

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
console.log(pets); // Outputs: ["dog", "duck", "frog"]

for (var i = 0; i <= 12; i++) {
  // Code to be executed
}

for (var i = 0; i < 10; i++) {
  // Code to be executed
}

var arrayLength = arrayName.length;

var flag = true; // Initial Boolean value can be true or false

for (var i = 0; i < pets.length; i++) {
  // Code to be executed
}

var userNames = ["John", "Jane", "Alice", "Bob"]; // Example array of user names

var firstName = prompt("Enter first name");

for (var i = 0; i < userNames.length; i++) {
  if (userNames[i] === firstName) {
    alert("Enter"); // User name matches
    break;
  } else {
    alert("Please write correct user name"); // User name does not match
  }
}
