import express from "express";
const router = express.Router();
import multer from '../middleware/multer.mjs';
import User from '../models/user.js';

import { signin,deleteUser,signup,getUsers, updateUserrById, addUserr, getByIdUserrrr } from "../controllers/user.js";


router.post("/signin", signin);
router.post("/signup", signup);
//router.put("/updateUserss/:id", updateUser);
router.post("/addUserr",multer, addUserr);
router.get("/getUsers", getUsers);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUserrById/:id",multer, updateUserrById);

//router.post('/activateaccount',activateAccount)
//router.post('/updateProfile',updateProfile)

router.get('/getByIdUserrrr/:id',getByIdUserrrr)






 

export default router;