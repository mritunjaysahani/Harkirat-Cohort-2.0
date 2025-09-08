// DRY=DONT REPEAT YOURSELF
// Callback function is a function passed as an argument to another function
// It allows a function to call another function
// It allows a function to be more flexible and reusable
//also known as functional arguments
const fs=require('fs');
function sqauare(n){
    return n*n;
}
function cube(n){   
    return n*n*n;
}
function sumOfSomething(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);
    return val1+val2;
}
console.log(sumOfSomething(1,2,sqauare));
console.log(sumOfSomething(5,2,cube));

let a=1;
console.log(a);
fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log("data is readed from a.txt file");
    console.log(data);
})

let ans=0;
for(let i=1;i<=99;i++){
    ans+=i;
}   
console.log("Sum is: "+ans);
function findSumTill100(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans+=i;
    }   
    return ans;
} 
setTimeout(()=>{
    console.log("inside 1st timeout "); 
    setTimeout(()=>{
        console.log("inside 2nd timeout");
           setTimeout(()=>{
        console.log("inside 3rd timeout");
    },0);  
    }
    ,2000);  
 
},1000);

//promises are just a better way to handle callbacks
//it is just a pretty way to write callbacks
//promise is an class/object which is used as a placeholder for the future result of an asynchronous operation
function promisifiedsetTimeout(){
    const p=new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve();
        },2000);
    });
    return p;
}
const x=promisifiedsetTimeout();
x.then(()=>{
    console.log("inside promise");
});
console.log("Hello World");

