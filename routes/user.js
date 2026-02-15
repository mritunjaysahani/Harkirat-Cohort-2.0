const { Router }=require("express")
const UserRouter=Router();

UserRouter.post('/signup',(req,res)=>{
    res.json({
        message:"signup endpoint"
    })
})
UserRouter.post('/signin',(req,res)=>{
    res.json({
        message:"signin endpoint"
    })
    
})
UserRouter.get('/purchases',(req,res)=>{
      res.json({
        message:"see purchased courses"
    })
})
module.exports={
   userRouter:UserRouter
}