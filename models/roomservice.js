import mongoose from 'mongoose';

const RoomServiceSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    type:{
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
    image:{
        type: String,
    }
})

export default mongoose.model("RoomService", RoomServiceSchema);