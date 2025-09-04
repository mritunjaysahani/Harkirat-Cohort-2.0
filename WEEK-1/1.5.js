/**
  Synchronous functions run one after another, like doing 
 all parts of a task yourself sequentially.
Asynchronous functions run in parallel by delegating 
tasks, saving time.


JavaScript handles async tasks like --

setTimeout by delegating them and then using
 callbacks to get the result.


Promises & Async/Await--

Promises make async code cleaner and more readable than using
 callbacks. They return a placeholder that will eventually have a value.
Async/Await is syntax built on Promises that makes 
async code look and behave like synchronous code. It is typically
 used by the function caller, not the creator
 */


function findSumTill100(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }   
    return ans;
}
function findSum(){
    console.log("Sum is: "+findSumTill100(100));   
}

setTimeout(findSum,1000);
console.log("Hello World");
