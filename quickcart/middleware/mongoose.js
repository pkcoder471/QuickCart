const mongoose = require('mongoose');
const URI = process.env.MONGO_URI;

const ConnectToDb = async (handler) =>{
    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }
    await mongoose.connect(URI);
    return handler(req,res)
}

export default ConnectToDb;