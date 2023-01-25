import express from 'express';
const router= express.Router();
import Hotel from '../models/items.js';
import cors from 'cors';
import { updateHotel, getHotel, getHotelById, addHotel, deleteHotel} from "../controllers/items.js";

router.use(cors());
router.get("/getHotel", getHotel);
router.get("/getHotelById/:id", getHotelById);
router.put("/updateHotel/:id", updateHotel);
router.post("/addHotel", addHotel);
router.delete("/deleteHotel/:id", deleteHotel);

 
export default router;