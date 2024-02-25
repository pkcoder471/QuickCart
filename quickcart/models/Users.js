const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: email,
        required:true,
        unique:true
    },
    Password:{
        type: String,
        required:true
    }
},{
    timestamps:true
})

mongoose.models={};
export default mongoose.model('User',UserSchema);
