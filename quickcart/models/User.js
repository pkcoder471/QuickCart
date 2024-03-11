const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    address:{
        type: String,
    },
    phone:{
        type: String,
    },
    pincode:{
        type: String,
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    }
},{
    timestamps:true
})

mongoose.models={};
export default mongoose.model('User',UserSchema);
