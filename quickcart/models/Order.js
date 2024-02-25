const mongoose = require('mongoose');

const {Schema} = mongoose;

const ProductSchema = new Schema({
    userId:{
        type: String,
        required:true,
    },
    products:[{
        productId:{
            type:String,
            required:true
        },
        qty:{
            type: Number,
            required:true 
        }
    }],
    Amount:{
        type: Number,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"Pending"
    },
    address:{
        type:String,
        required:true
    }

},{
    timestamps:true
})


export default mongoose.model('Product',ProductSchema);
