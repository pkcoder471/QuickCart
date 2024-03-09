const mongoose = require('mongoose');

const {Schema} = mongoose;

const OrderSchema = new Schema({
    email:{
        type: String,
        required:true,
    },
    name:{
        type: String,
        required:true,
    },
    orderId:{
        type: String,
        required:true,
    },
    paymentInfo:{
        type: Object,
        default:""
    },
    products:{
            type:Object,
            required:true
    },
    amount:{
        type: Number,
        required:true
    },
    status:{
        type:String,
        default:"PENDING"
    },
    address:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

mongoose.models={};
export default mongoose.model('Order',OrderSchema);
