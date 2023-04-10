import express from 'express';
const router = express.Router();
import Hotel from '../models/hotel.js';
import cors from 'cors';
import multer3 from '../middleware/multer3.js';

import { updateHotel, getHotel, getHotelById, addHotel, deleteHotel, getimage } from "../controllers/hotel.js";

router.use(cors());
router.get("/uploads/:image_name", getimage);
router.get("/getHotel", getHotel);
router.get("/getHotelById/:id", getHotelById);
router.put("/updateHotel/:id", multer3, updateHotel);
router.post("/addHotel", multer3, addHotel);
router.delete("/deleteHotel/:id", deleteHotel);


export default router;