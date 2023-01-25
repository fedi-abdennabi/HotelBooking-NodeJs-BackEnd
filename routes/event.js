import express from 'express';
const router= express.Router();
import Event from '../models/event.js';
import cors from 'cors';
import { updateEvent, getEvent, getEventById, addEvent, deleteEvent, getimage} from "../controllers/event.js";

router.use(cors());
router.get("/uploads/:image_name", getimage);
router.get("/getEvent", getEvent);
router.get("/getEventById/:id", getEventById);
router.put("/updateEvent/:id", updateEvent);
router.post("/addEvent", addEvent);
router.delete("/deleteEvent/:id", deleteEvent);


export default router;