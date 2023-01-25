import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String}, 
  email: { type: String,},
  password: { type: String},
  role: {type:String,default:"Client"},
  //role: {type:String,default:"Admin"}
  profilePic:{type:String}
});

export default mongoose.model("User", userSchema);