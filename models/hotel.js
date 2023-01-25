import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    adress:{
        type: String, 
    },
    price:{
        type: Number,
       
    },
    image:{
        type: String,
    }
})

export default mongoose.model("Hotel", HotelSchema);