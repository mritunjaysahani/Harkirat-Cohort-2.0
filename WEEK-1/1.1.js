// ===============================
// 1. JAVASCRIPT IS ANDynamically Typed Language
// ===============================
let a = "mritunjay";
console.log(a);

a = 999;
console.log(a);

a = true;
console.log(a); // ✅ JavaScript allows changing types dynamically


// ===============================
// 2. Variable Declaration
// ===============================
let fname = "mritunjay";  // block scoped
const age = 18;           // constant (cannot be reassigned)
var isStudent = true;     // function/global scoped

console.log(fname, age, isStudent);


// ===============================
// 3. Array Basics
// ===============================
let arr = [1, 2, 3, 4, 5];
console.log(arr[1]); // 2

let age1 = 20;
let canVote = (age1 > 18);
console.log(canVote); // true


// ===============================
// 4. Functions
// ===============================

// Function Declaration
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(20, 40)); // 60

// Function Example 2
function greet(name) {
    return "Hello " + name;
}
console.log(greet("mritunjay")); // Hello mritunjay


// ===============================
// 5. Array Iteration
// ===============================
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}


// ===============================
// 6. Objects
// ===============================
// Object is a collection of key-value pairs
function greetUser(user) {
    console.log("Hello " + user.name + ", you are " + user.age + " years old.");
}

let user1 = {
    name: "Radha",
    age: 20,
    gender: "female"
};
greetUser(user1);


// ===============================
// 7. Array of Mixed Values & Objects
// ===============================
let mixedArray = [1, "Rahul", { name: "Rax", age: 20 }];
console.log(mixedArray[2]);         // { name: "Rax", age: 20 }
console.log(mixedArray[2].name);    // Rax

for (let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}


// ===============================
// 8. Nested Objects
// ===============================
let nested = [
    "Mridul",
    1,
    {
        name: "Mr",
        age: 19,
        cities: [
            "Delhi",
            "Mumbai",
            "Kolkata",
            { country: "India", state: "UP" }
        ]
    }
];

console.log(nested[2].cities[3].state); // UP


// ===============================
// 9. Assignment: Adult Check
// ===============================
function checkAdult(person) {
    if (person.age > 18) {
        console.log(person.name + " is an adult.");
    } else {
        console.log(person.name + " is not an adult.");
    }
}

let people = [
    { name: "Mritunjay", age: 5 },
    { name: "Rahul", age: 21 },
    { name: "Mridul", age: 22 }
];

for (let i = 0; i < people.length; i++) {
    checkAdult(people[i]);
}


// ===============================
// 10. Assignment: Filter Male Adults
// ===============================

// ✅ Approach 1: Using loop
function filterMaleAdults(persons) {
    let result = [];
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].age > 18 && persons[i].gender === "male") {
            result.push(persons[i]);
        }
    }
    return result;
}

let people2 = [
    { name: "Mritunjay", age: 5, gender: "male" },
    { name: "Rahul", age: 21, gender: "male" },
    { name: "Mridul", age: 22, gender: "male" },
    { name: "Radha", age: 25, gender: "female" }
];

console.log(filterMaleAdults(people2));
