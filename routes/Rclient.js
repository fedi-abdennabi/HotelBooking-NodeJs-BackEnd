import express from 'express';
const router = express.Router();
import Rclient from '../models/Rclient.js';
import cors from 'cors';
import { updateRclient, getRclient, getRclientById, addRclient, deleteRclient, getOrderId, updateTransactionStatus} from "../controllers/Rclient.js";

router.use(cors());
router.get("/getRclient", getRclient);
router.get("/getRclientById/:id", getRclientById);
router.put("/updateRclient/:id", updateRclient);
router.post("/addRclient", addRclient);
router.delete("/deleteRclient/:id", deleteRclient);
router.post("/getOrderId", getOrderId);
router.post("/updateTransactionStatus", updateTransactionStatus);

 
export default router;