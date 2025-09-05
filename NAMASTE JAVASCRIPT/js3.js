/**Hoisting in JavaScript
The video provides a comprehensive explanation of the concept of hoisting in JavaScript,
 which enables the use of variables and functions before they are declared in the code.
  It highlights how JavaScript manages this functionality, how it's executed, and its
   significance for developers. Here are some of the key takeaways from the video:

```
* **Introduction to Hoisting**: The video begins by demonstrating a "magic" aspect of 
JavaScript where a variable can be accessed before its declaration, resulting in *undefined* 
instead of an error. This unique behavior is introduced as "hoisting".

* **Hoisting with Functions**: Functions declared with the `function` keyword can also be called
 before their declaration. Unlike variables, calling a function before it's defined in the code 
 prints the function's content, not *undefined*.

* **Memory Allocation Phase**: The core reason for hoisting is explained through JavaScript's execution context.
 Before any code is executed, JavaScript's memory creation phase allocates memory to all variables and functions.
  Variables are initialized with *undefined*, while functions are stored in memory with their full code.

* ***undefined* vs. *not defined***: The video clarifies the difference between `undefined` and `not defined`. 
`undefined` means a variable has been declared and allocated memory but has not been assigned a value. `not defined`
 means the variable does not exist in the memory space at all.

* **Arrow Functions and Function Expressions**: Hoisting behaves differently with arrow functions and function expressions.
 When these are used, they are treated like variables and are assigned *undefined* during the memory allocation phase, which 
 will result in a "not a function" error if called before declaration.

* **Call Stack Demonstration**: The video provides a practical demonstration of the call stack. It shows how the global execution 
context is created and how a new execution context is pushed onto the stack when a function is called and popped off when the function completes.

* **Best Practices**: The video concludes by emphasizing the importance of understanding hoisting to write better JavaScript
 and to be able to explain this fundamental concept in interviews.*/