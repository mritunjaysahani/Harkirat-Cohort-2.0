const express=require("express");
const { userRouter }=require("./routes/user")
const { courseRouter }=require("./routes/course")
const app=express();
console.log("Value of userRouter:", userRouter);
app.use("/user",userRouter);
app.use("/course",courseRouter)
app.listen(3009,()=>{
    console.log("Server is running on port 3009");
});
