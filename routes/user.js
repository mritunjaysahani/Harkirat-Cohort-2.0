const { Router }=require("express")
const UserRouter=Router();
const { userModel }=require("../db")
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const { signupSchema, signinSchema } = require("../zodvalidaton/user");
const { JWT_USER_PASSWORD } = require("../config");

UserRouter.post('/signup',async (req,res)=>{
     try {
    const parsed = signupSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: parsed.error.issues[0].message
      });
    }

    const { email, password, firstName, lastName } = parsed.data;

    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(409).json({
        message: "USER already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName
    });

    return res.status(201).json({
      message: "USER created successfully"
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error creating USER"
    });
  }
})
UserRouter.post('/signin',async(req,res)=>{
      try {
    const parsed = signinSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: parsed.error.issues[0].message
      });
    }

    const { email, password } = parsed.data;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      JWT_USER_PASSWORD,
      { expiresIn: "1h" }
    );

    return res.json({
      message: "User signed in successfully",
      token
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Error signing in"
    });
  }
    
})
UserRouter.get('/purchases',async(req,res)=>{
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId,
    });

    let purchasedCourseIds = [];

    for (let i = 0; i<purchases.length;i++){ 
        purchasedCourseIds.push(purchases[i].courseId)
    }

    const coursesData = await courseModel.find({
        _id: { $in: purchasedCourseIds }
    })

    res.json({
        purchases,
        coursesData
    })
})
module.exports={
   userRouter:UserRouter
}