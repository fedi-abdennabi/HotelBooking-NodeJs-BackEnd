import express from 'express';
const router= express.Router();
import RoomService from '../models/roomservice.js';
import cors from 'cors';
import { updateRoomService, getRoomService, getRoomServiceById, addRoomService, deleteRoomService, getimage} from "../controllers/roomservice.js";

router.use(cors());
router.get("/uploads/:image_name", getimage);
router.get("/getRoomService", getRoomService);
router.get("/getRoomServiceById/:id", getRoomServiceById);
router.put("/updateRoomService/:id", updateRoomService);
router.post("/addRoomService", addRoomService);
router.delete("/deleteRoomService/:id", deleteRoomService);


export default router;