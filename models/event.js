import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    Date:{
        type: Date,
    },
    image:{
        type: String,
    }
})

export default mongoose.model("Event", EventSchema);