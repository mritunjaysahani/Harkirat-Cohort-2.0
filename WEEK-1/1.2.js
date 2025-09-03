// === Level 1: Basics ===

// --- Strings in JavaScript and String Manipulation ---

// 1. .length: Returns the length of a string.
function getLength(str) {
  console.log("Original string:", str);
  console.log("Length:", str.length);
}
getLength("hello world");
console.log("---");

// 2. .indexOf: Finds the first index of a character or substring.
function findIndexOf(str, target) {
  console.log("Original string:", str);
  console.log("Target:", target);
  console.log("First index of target:", str.indexOf(target));
  console.log("Last index of target:", str.lastIndexOf(target));
}
findIndexOf("hello world", "l");
console.log("---");

// 3. .slice(start, end) and .substring(start, end)
function getSlice(str, start, end) {
  console.log("Original string:", str);
  console.log("Substring from index", start, "to", end, ":", str.slice(start, end));
}
getSlice("hello world", 0, 8);
console.log("---");

// 4. .replace(target, replacement)
const myString = "radha kumari singh";
console.log("Original string:", myString);
console.log("String after replace:", myString.replace("radha", "aaloo"));
console.log("---");

// 5. .split(separator)
const names = "my name is alloo";
const splitArray = names.split(" ");
console.log("Original string:", names);
console.log("Split into an array:", splitArray);
console.log("---");

// 6. .trim()
const stringWithSpaces = "     spaces     al    ";
console.log("Original string with spaces:", `'${stringWithSpaces}'`);
console.log("Trimmed string:", `'${stringWithSpaces.trim()}'`);
console.log("---");

// 7. .toUpperCase() and .toLowerCase()
const caseString = "Hello World";
console.log("Original string:", caseString);
console.log("Uppercase:", caseString.toUpperCase());
console.log("Lowercase:", caseString.toLowerCase());
console.log("---");

// --- Numbers in JavaScript and its Manipulations ---
console.log("Parsing '54':", parseInt("54"));
console.log("Parsing '54.5':", parseFloat("54.5"));
console.log("Parsing '54.5' to integer:", parseInt("54.5"));
console.log("Parsing '44px':", parseInt("44px"));
console.log("---");

// --- Arrays in JavaScript ---
const arr = [4, 6, 5, 8];
console.log("Original array:", arr);

arr.push(6);
console.log("After push(6):", arr);

arr.pop();
console.log("After pop():", arr);

arr.unshift(95);
console.log("After unshift(95):", arr);

arr.shift();
console.log("After shift():", arr);
console.log("---");

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const combinedArray = arr1.concat(arr2);
console.log("Combined array using concat():", combinedArray);
console.log("---");

console.log("Iterating with forEach():");
arr1.forEach(function (element) {
  console.log(element);
});
console.log("---");

// === Level 2: Advanced Concepts ===

// --- Classes and Objects ---
class Animal {
  constructor(name, age, speaks) {
    this.name = name;
    this.age = age;
    this.speaks = speaks;
  }

  static info() {
    console.log("This is an Animal class.");
  }

  speak() {
    console.log(this.name + " speaks " + this.speaks);
  }

  showAge() {
    console.log(this.name + " is " + this.age + " years old.");
  }
}

const dog = new Animal("dog", 4, "barks");
const cat = new Animal("cat", 3, "meows");
const cow = new Animal("cow", 5, "moos");

cat.speak();
dog.showAge();
cow.speak();
Animal.info();
console.log("---");

// --- Date in JavaScript ---
const currentDate = new Date();
console.log("Current date:", currentDate);
console.log("Year:", currentDate.getFullYear());
console.log("Month (0-11):", currentDate.getMonth());
console.log("Day of the month:", currentDate.getDate());
console.log("Day of the week (0-6):", currentDate.getDay());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());
console.log("---");

// Measuring performance with Date.now()
function sum() {
  let total = 0;
  for (let i = 0; i < 100000; i++) {
    total += i;
  }
  return total;
}
const before = Date.now();
sum();
const after = Date.now();
console.log("Time taken to run sum() in milliseconds:", after - before);
console.log("---");

// --- JSON in JavaScript ---
const user2 = '{"name":"mritunjay","age":20}';
const user1 = JSON.parse(user2);
console.log("Parsed JSON string:", user1);

const user3 = JSON.stringify(user1);
console.log("Stringified JavaScript object:", user3);
console.log("---");

// --- Math Functions ---
console.log("PI:", Math.PI);
console.log("Absolute value of -5:", Math.abs(-5));
console.log("Ceiling of 5.5:", Math.ceil(5.5));
console.log("Floor of 5.5:", Math.floor(5.5));
console.log("Round of 5.5:", Math.round(5.5));
console.log("Maximum of numbers:", Math.max(5, 6, 7, 8, 9));
console.log("Minimum of numbers:", Math.min(5, 6, 7, 8, 9));
console.log("5 to the power of 2:", Math.pow(5, 2));
console.log("Square root of 25:", Math.sqrt(25));
console.log("Random number (0-1):", Math.random());
console.log("Random number 1-10:", Math.floor(Math.random() * 10) + 1);
console.log("---");

// --- Object Methods ---
function objectMethods(obj) {
  console.log("Original object:", obj);
  console.log("Keys:", Object.keys(obj));
  console.log("Values:", Object.values(obj));
  console.log("Key/Value pairs:", Object.entries(obj));
  console.log("Does the object have 'name'?", obj.hasOwnProperty("name"));
  console.log("Does the object have 'age'?", obj.hasOwnProperty("age"));
}

const sample = {
  name: "mritunjay",
  age: 20,
  height: 5.7,
  weight: 60,
};
objectMethods(sample);
