/**JavaScript Loops
Loops are used to execute a block of code repeatedly. The document shows two ways to calculate the sum of numbers from 0 to 50.

The "Better Way" uses a for loop to automate the process:
*/
let ans = 0;
for (let i = 1; i <= 50; i++) {
ans = ans + i;
}
console.log(ans);
/**JavaScript Functions
A function is a reusable block of code that performs a specific task. They are useful for following the DRY (Don't Repeat Yourself) principle, which means you avoid repeating the same code.

Example of a function to find the sum of numbers up to 'n':
*/

function findSum(n) {
let ans = 0;
for (let i = 1; i < n; i++) {
ans = ans + i;
}
return ans;
}
/*JavaScript Callback Functions
A callback function is a function that is passed as an argument to another function. This allows for more flexible code that can perform different operations without repeating the main function logic.

Example of a function that accepts a callback:
*/
function sqauare(n){
    return n*n;
}
function sumOfSquares(a,b){
    const val1=sqauare(a);
    const val2=sqauare(b);
    return val1+val2;
}
console.log(sumOfSquares(1,2));




function sumOfSomething(a, b, fn) {
const val1 = fn(a);
const val2 = fn(b);
return val1 + val2;
}

//You can then pass an anonymous function (a function without a name) as the callback:

const sumOfsquares = sumOfSomething(1, 2, function(a) {
            return a * a;
});
console.log(sumOfsquares); // Outputs: 5 (1^2 + 2^2 = 1 + 4 = 5)