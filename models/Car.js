import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
    cartype:{
        type: String,
     
    },
    carbrand:{
        type: String
    },
    carprice:{
        type: String,
        
    },
    carPic:{
        type: String,

    },
    carengine:{
        type: String,
    }


})

export default mongoose.model("Car", CarSchema);