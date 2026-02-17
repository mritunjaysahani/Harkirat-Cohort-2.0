const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema=new Schema({
    email:{type :String,unique:true,required:true},
    password:String,
    firstName:String,
    lastName:String
})
const adminSchema=new Schema({
    email:{type :String,unique:true,required:true},
    password:String,
    firstName:String,
    lastName:String

})

const courseSchema=new Schema({
    title:String,
    description:String,
    price:Number,
    imageLink:String,
   creatorId: {
  type: Schema.Types.ObjectId,
  ref: "admin"
}
})
const PurchaseSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "course",
    required: true
  }
});


const userModel=mongoose.model("user",userSchema);
const adminModel=mongoose.model("admin",adminSchema);
const courseModel=mongoose.model("course",courseSchema);    
const purchaseModel=mongoose.model("purchase",PurchaseSchema);
module.exports={
    userModel,
    adminModel,
    courseModel,
    purchaseModel  
}