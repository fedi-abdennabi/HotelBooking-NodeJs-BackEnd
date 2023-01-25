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
    price:{
        type: Number,
       
    },
    rooms:{
        type: Number,
       
    }
})

export default mongoose.model("Hotel", HotelSchema);