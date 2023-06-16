//Answer 1 :
//datatypes
/* String :
        PW provide us WebD course

    Number :
        integer:99
        floating:9.009
        INFInITY: positive and negative
        
    BigInt: 1021n

    Boolean : true,false

    Undefined; undefined

    Null: null

    Symbol: Symbol("pw")

    Object  Array:[1,3]
            Objects:{"ankit","pwlive",7}        

        */



// Answer 2

/* Array-["iphone",

"Macbook Pro",

"Flower Pot",

"Water Bottle",

"Mac Studio mini",

"Watch",

"Tennis Ball",

"Mouse Pad",

"Keyboard",

"Lens"]  


//Answer 3

student_registry = {
    1: "John Smith",
    2: "Emily Johnson",
    3: "Michael Davis",
    4: "Jessica Brown",
    5: "Christopher Lee"
}

Answer 4


var myVariable;

// Number
myVariable = 42;
console.log(myVariable, typeof myVariable);

// String
myVariable = "Hello, world!";
console.log(myVariable, typeof myVariable);

// Boolean
myVariable = true;
console.log(myVariable, typeof myVariable);

// Array
myVariable = [1, 2, 3];
console.log(myVariable, typeof myVariable);

// Object
myVariable = { name: "John", age: 25 };
console.log(myVariable, typeof myVariable);

// Function
myVariable = function() {
  return "I am a function.";
};
console.log(myVariable(), typeof myVariable);

// Null
myVariable = null;
console.log(myVariable, typeof myVariable);

// Undefined
myVariable = undefined;
console.log(myVariable, typeof myVariable);



Answer 5

// Valid variables
var validVariable1 = "Hello, world!";
var validVariable2 = 42;

console.log(validVariable1); // Prints: Hello, world!
console.log(validVariable2); // Prints: 42

// Invalid variables
var invalidVariable1 = 3/0; // Division by zero
var invalidVariable2 = "Invalid variable;

console.log(invalidVariable1); // Prints: Infinity (division by zero)
console.log(invalidVariable2); // Throws an error: Uncaught SyntaxError: Unexpected identifier



Answer 6


function printMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
}

// Example: Printing the multiplication table for the number 5
printMultiplicationTable(5);


var num1 = 10;
var num2 = 5;

// Addition
var addition = num1 + num2;
console.log("Addition:", addition);

// Subtraction
var subtraction = num1 - num2;
console.log("Subtraction:", subtraction);

// Multiplication
var multiplication = num1 * num2;
console.log("Multiplication:", multiplication);

// Division
var division = num1 / num2;
console.log("Division:", division);

// Remainder (Modulus)
var modulus = num1 % num2;
console.log("Modulus:", modulus);

// Exponentiation
var exponentiation = Math.pow(num1, num2);
console.log("Exponentiation:", exponentiation);



Answer 7


function calculateRectanglePerimeter(length, width) {
  var perimeter = 2 * (length + width);
  return perimeter;
}

var length = 10;
var width = 5;

var rectanglePerimeter = calculateRectanglePerimeter(length, width);
console.log("Perimeter of the rectangle,rectanglePerimeter)

Answer 8


var num1 = 10;
var num2 = 5;

// Equal to (==)
console.log("Equal to (==):");
console.log(num1 == num2); // false
console.log(num1 == 10); // true

// Not equal to (!=)
console.log("Not equal to (!=):");
console.log(num1 != num2); // true
console.log(num1 != 10); // false

// Greater than (>)
console.log("Greater than (>):");
console.log(num1 > num2); // true
console.log(num1 > 15); // false

// Greater than or equal to (>=)
console.log("Greater than or equal to (>=):");
console.log(num1 >= num2); // true
console.log(num1 >= 10); // true

// Less than (<)
console.log("Less than (<):");
console.log(num1 < num2); // false
console.log(num1 < 15); // true

// Less than or equal to (<=)
console.log("Less than or equal to (<=):");
console.log(num1 <= num2); // false
console.log(num1 <= 10); // true

Answer 9

function trafficControl(trafficLight) {
  if (trafficLight === 'red') {
    console.log("Vehicles must stop.");
  } else {
    console.log("Continue with traffic flow.");
  }
}

// Example: Traffic light is red
var currentLight = 'red';
trafficControl(currentLight);

Answer 9

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number.toString();
  }
}

// Example usage
console.log(fizzBuzz(9));    // Output: Fizz
console.log(fizzBuzz(10));   // Output: Buzz
console.log(fizzBuzz(15));   // Output: FizzBuzz
console.log(fizzBuzz(7));    // Output: 7



Answer 10
function daysUntilWeekend(dayOfWeek) {
  // Convert the dayOfWeek to lowercase for case-insensitive comparison
  var lowercaseDay = dayOfWeek.toLowerCase();

  // Determine the number of days until the weekend
  switch (lowercaseDay) {
    case 'monday':
      return 5;
    case 'tuesday':
      return 4;
    case 'wednesday':
      return 3;
    case 'thursday':
      return 2;
    case 'friday':
      return 1;
    case 'saturday':
    case 'sunday':
      return 0;
    default:
      return 'Invalid day of the week';
  }
}

// Example usage
console.log(daysUntilWeekend('Monday'));    // Output: 5
console.log(daysUntilWeekend('Wednesday')); // Output: 3
console.log(daysUntilWeekend('Saturday'));  // Output: 0
console.log(daysUntilWeekend('Invalid'));   // Output: Invalid day of the week


Answer 11
function printPositiveEvenNumbers(limit) {
  for (let i = 2; i <= limit; i += 2) {
    console.log(i);
  }
}

// Example: Printing positive even numbers up to 10
printPositiveEvenNumbers(10);

*/