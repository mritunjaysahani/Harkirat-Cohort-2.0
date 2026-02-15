const { Router }=require("express");
const courseRouter=Router();

courseRouter.post('/purchases',(req,res)=>{
      res.json({
        message:"purchase a course"
    })
})
courseRouter.get('/preview',(req,res)=>{
    courseRouter.get('/user/purchases',(req,res)=>{
      res.json({
        message:"all courses"
    })
})
})
module.exports={
    courseRouter :courseRouter
}