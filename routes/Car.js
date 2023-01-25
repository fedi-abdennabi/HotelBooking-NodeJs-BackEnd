import express from 'express';
const router= express.Router();
import multer2 from '../middleware/multer2.js';
import Car from '../models/Car.js';
import cors from 'cors';
import { updateCar, getCar, getCarById, addCar, deleteCar} from "../controllers/Car.js";


router.use(cors());
router.get("/getCar", getCar);
router.get("/getCarById/:id", getCarById);
router.put("/updateCar/:id",multer2,updateCar);
router.post("/addCar",multer2,addCar);
router.delete("/deleteCar/:id", deleteCar);

 
export default router;