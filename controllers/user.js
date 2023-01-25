import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';


import multer from "multer";
import user from "../models/user.js";
import UserModal from "../models/user.js";
dotenv.config();


const secret = process.env.secret;
const BASE_URL = process.env.BASE_URL;

export const getUsers = async (req, res) => {
  try {   

    const users = await UserModal.find();    
    res.status(200).json(users);
} catch (error) {
 
    res.status(404).json({ message: error.message });
}}

export const deleteUser = async (req, res) => {
  try {   

     await UserModal.findByIdAndDelete(req.params.id);    
    res.status(200).json("user deleted");
} catch (error) {

    res.status(404).json({ message: error.message });
}
}

export const updateUserById = async (req, res) => {
  try {   

     await UserModal.findByIdAndUpdate(req.params.id,req.body)    
    res.status(200).json("user changed");
} catch (error) {

    res.status(404).json({ message: error.message });
}
}


/* export const activateAccount = async (req, res) => {
  const { licensekey, userid } = req.body;
  const license_key = await licensekeyModal.findOne({
    license_key: licensekey,
  });
  if (!license_key)
    return res.status(400).json({ message: "this license key is invalid" });
  if (!license_key.isActivated) {
    const user = await UserModal.findOne({ _id: userid });
    var today = new Date();
    today.setDate(today.getDate() + license_key.duration);
    user.active_until = today;
    user.role = license_key.type;
    user.save();
    license_key.isActivated = true;
    license_key.save();
    return res.status(200).json(user);
  } else {
    return res
      .status(400)
      .json({ message: "this license key is already used" });
  }
}; */

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "Email adress doesn't exist !" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid password !" });

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      process.env.secret,
      {
        expiresIn: "1h",
      }
    );


    res.status(200).json(oldUser);
    console.log(oldUser);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstname, lastname, role ,profilePic} = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      email,
      role,
      
      password: hashedPassword,
      firstname: `${firstname}`,
      lastname: `${lastname}`,
      profilePic: `${profilePic}`,
    });

    
    const token = jwt.sign({ email: result.email, id: result._id },secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
    console.log("esss")
  } catch (error) {
    res.status(500).json({ message: "sucess" });

    console.log(error);
  }
};
/*
export const forgetPass = async (req, res) => {
*/


export const addUserr = async (req, res) => {
  try{
      const ite =  new UserModal({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password,
        profilePic :`${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`,
  })

      await ite.save()
      res.json(ite)

  }catch(err){
      res.send('Error '+ err)
  
}}
export const getByIdUserrrr = async (req, res) => {
  try {   

    const ite = await UserModal.findById(req.params.id);    
    res.status(200).json(ite);
} catch (error) {
 
    res.status(404).json({ message: error.message });
}}

export const updateUserrById = async (req, res) => {
  try {
    let foundUser = await UserModal.findOne({ _id: req.params.id });

    const updateImages = {};

    if (req.files?.profilePic) {

        // delete photo
        // check if we got files object
        if (req.files?.profilePic !== undefined) {
          // check if the user didn't have photo
          if (foundUser.profilePic !== '') {
            fs.unlinkSync(`${foundUser.profilePic}`);
          }
        }
        //  then update
        updateImages.profilePic = (req.files?.profilePic[0].path).replace('\\', '/');

    } 

    let updatedUser = await UserModal.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          ...updateImages,
          email: req.body.email ? req.body.email : foundUser.email,
         // profilePic: ${req.protocol}://${req.get('host')}/uploads/${req.file.filename},
          firstname: req.body.firstname ? req.body.firstname : foundUser.firstname,
          lastname: req.body.lastname ? req.body.lastname : foundUser.lastname,
          password: req.body.password ? req.body.password : foundUser.password,
          //role: req.body.role ? req.body.role : foundUser.role,

        },
      },
      { new: true, upsert: true },
    );

    res.status(200).send(
      updatedUser
    );
  } catch (error) {
    res.status(500).json({
      message: "ghalta",
    });
  }
};
