const mongoose = require('mongoose');

const {Schema} = mongoose;

const ProductSchema = new Schema({
    itemCode:{
        type: String,
        required:true,
        unique:true
    },
    name:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    desc:{
        type: String,
        required:true
    },
    img:{
        type: String,
        required:true
    },
    color:{
        type: String,
        required:true
    },
    size:{
        type: String,
        required:true
    },
    qty:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

},{
    timestamps:true
})


export default mongoose.model('Product',ProductSchema);