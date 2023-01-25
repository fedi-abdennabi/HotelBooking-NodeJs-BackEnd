import express from "express";
const router = express.Router();
import multer from '../middleware/multer.mjs'
import User from '../models/user.js';
import { signin,deleteUser,signup,getUsers, addUserr, getByIdUserrrr ,updateUserrById } from "../controllers/user.js";
//import {fileUpload} from "../middleware/multer.mjs";


router.post("/signin", signin);
router.post("/signup", signup);
router.post("/addUserr",multer, addUserr);
router.get("/getUsers", getUsers);
router.delete("/deleteUser/:id", deleteUser);
router.post('/uploadProfileImg',multer)
//router.post('/activateaccount',activateAccount)
router.put('/updateUserrById/:id',multer,updateUserrById);
router.get('/getByIdUserrrr/:id',getByIdUserrrr)






 

export default router;