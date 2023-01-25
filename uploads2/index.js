import express from 'express';
//import Razorpay from 'razorpay';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from "./routes/user.js";
import RclientRouter from './routes/Rclient.js'; 
import CarRouter from "./routes/Car.js"
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config(); 
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({  extended: true }))
app.use(express.static(path.join(__dirname, 'uploads')));
const CONNECTION_URL = process.env.CONNECTION_URL;
import HotelRouter from './routes/items.js'
app.use('/Hotel', HotelRouter)

app.use("/user", userRouter);
app.use("/Car", CarRouter);
app.use("/Rclient", RclientRouter);
const PORT = process.env.PORT|| 3001;



  // Replace with your key_id
  //key_id: rzp_test_6nTok2Qu0oeHAO,
  //key_secret: YBhj8FP9PLhuGGu4DI5YO5FhW
// API for uploads file (photo, galleries)
app.get('/uploads/:id', (req, res) => {
  res.sendFile(path.join(__dirname, `./uploads/${req.params.id}`));
});
app.get('/uploads2/:id', (req, res) => {
  res.sendFile(path.join(__dirname, `./uploads2/${req.params.id}`));
});

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
}));


