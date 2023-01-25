import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String,
    required:true },
  password: { type: String,
    required:true },
  profilePic: {type: String},
  role: {type:String,default:"client"},
});

export default mongoose.model("User", userSchema);