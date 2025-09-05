/**JavaScript Functions and Variable Environments
This video explains how functions work in JavaScript
 and the concept of a variable environment.

• When a function is invoked, a new execution 
context is created for that function. 
This context has its own memory space,
 which is also known as a variable environment.
  This means that each function invocation has its
   own set of variables, which are independent of
    other functions and the global scope.
• The video also discusses how the call stack works.
 The call stack is a data structure that keeps track
  of the active function calls. When a function is 
  called, its execution context is pushed onto the 
  call stack. When the function returns, its execution
   context is popped off the call stack.*/

 var x=1;
 a();
 b();
 console.log(x);

   function a() {
    var x=10;
    console.log(x);
}
function b() {
    var x=100;
    console.log(x);
}