import Product from '@/models/Product';
import connectToDb from '@/middleware/mongoose';

const handler = async (req,res) =>{
    try {
        let products = await Product.find();
        return res.status(200).json({products});
    } catch (err) {
        console.log(err);
        return res.status(500).json({"errror":"Internal Server error!!"})
    }
}
export default connectToDb(handler);
  