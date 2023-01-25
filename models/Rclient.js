import mongoose from 'mongoose';

const RclientSchema = new mongoose.Schema({
    pickupdate:{
        type: String,
        required:true
    },
    userId:{
        type: String
    },
    dropoffdate:{
        type: String,
        required:true
    },
    price:{
        type:String,
        default:"500"
    }
})

export default mongoose.model("Rclient", RclientSchema);