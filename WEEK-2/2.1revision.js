// ==================== CALLBACKS ====================

// A callback is a function passed as an argument to another function. 
// This allows the inner function to "call back" or execute the outer function after its task is complete.
// Callbacks can help avoid code repetition. For example, instead of creating separate 
// sumOfSquares and sumOfCube functions, we can create a generic function that accepts a callback.

// A function that takes a callback function
function calculate(num1, num2, operation) {
  return operation(num1, num2); // Executes the callback with provided numbers
}

// Callback function to add two numbers
function add(a, b) {
  return a + b;
}

// Callback function to multiply two numbers
function multiply(a, b) {
  return a * b;
}

// Using the `calculate` function with different callbacks
let sum = calculate(5, 3, add);
console.log("Sum:", sum); // Output: 8

let product = calculate(5, 3, multiply);
console.log("Product:", product); // Output: 15

// WARNING: "callback hell" occurs when multiple async callbacks are nested, making code hard to read and maintain.


// ==================== ASYNC FUNCTIONS AND PROMISES ====================

// Asynchronous (async) functions are tasks that JavaScript cannot access immediately and must wait for. 
// Examples: reading a file, sending a network request, or setTimeout. 
// JS does not stop execution and continues other tasks. When async task finishes, callback is run.

// A Promise is a cleaner way to handle async operations and avoids "callback hell".
// A promise represents a value that may not be available yet but will be resolved in the future.

// Example: Creating a function that returns a Promise
function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Waited for ${milliseconds}ms!`);
    }, milliseconds);
  });
}

// Using the promise with .then()
delay(2000)
  .then(message => {
    console.log(message); // Output after 2 seconds: Waited for 2000ms!
  });


// ==================== ASYNC/AWAIT ====================

// async/await simplifies working with promises and makes async code look synchronous.
// An async function operates asynchronously, and await pauses execution until the promise is settled.

async function runAsyncExample() {
  console.log('Starting...');

  // 'await' pauses execution here until the promise resolves
  const message = await delay(2000); 
  console.log(message); // This line runs only after the promise resolves

  console.log('Done.');
}

runAsyncExample();


// ==================== JS FUNCTIONS: map() and filter() ====================

// map(): creates a new array by calling a function on every element in the original array
let numbers = [1, 2, 3, 4];
let doubledNumbers = numbers.map(number => number * 2);
console.log("Doubled Numbers:", doubledNumbers); // Output: [2, 4, 6, 8]

// filter(): creates a new array with elements that pass a test implemented by the provided function
let moreNumbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = moreNumbers.filter(number => number % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Output: [2, 4, 6]
