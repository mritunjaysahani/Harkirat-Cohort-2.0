
/* **JavaScript execution context:** The JavaScript engine creates an execution context,
 consisting of memory and code components, to run the code.
* **Phases of execution context:** The execution context is created in two phases:
    1.  Memory creation: The engine allocates memory for all variables and functions. 
    Variables are initialized with the value of "undefined"
    and the entire function's code is stored in the memory.
    2.  Code execution: The engine executes the code line by line and the values of the variables are assigned.
* **Call Stack:** The call stack manages the execution context with the global execution context at the bottom of the stack. 
   A new execution context is pushed onto the stack for each function call and popped off when the function returns. 
   The call stack maintains the order of execution of the execution context and is also known by other names like execution context stack, 
   program stack, control stack, runtime stack and machine stack.

*The video also touches on hoisting, which is a mechanism where variable and function declarations are moved to the top of 
their scope before code execution. This behavior is a direct result of the two-phase execution context creation process.*/