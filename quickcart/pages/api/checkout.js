import connectToDb from '@/middleware/mongoose';
import Order from '@/models/Order';
import Product from '@/models/Product';
import Razorpay from 'razorpay';

const handler = async (req, res) => {

    let success = false;
    const {email, address, subTotal, cart} = req.body;
    try {
        if (req.method === 'POST') {

            let total = 0;
            for(let item in cart){
                total+=cart[item].price*cart[item].qty;
                let product = await Product.findOne({itemCode:item});
                if(product.price!==cart[item].price){
                    return res.status(400).json({ success, "errror": "Price of some item have changed, Please try again!" })
                }
            }
            if(total!==subTotal){
                return res.status(400).json({ success, "errror": "Price of some item have changed, Please try again!" })
            }


            const instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.NEXT_PUBLIC_KEY_SECRET })
    
            const order = await instance.orders.create({
                amount: Number(subTotal*100),
                currency: "INR",
            })
    
            let newOrder = new Order({
                email,
                address,
                amount:subTotal,
                orderId:order.id,
                products:cart
    
            })
            await newOrder.save();
            success = true;
            return res.status(200).json({success,order})
        }
        else {
            return res.status(400).json({ success, "errror": "Bad Request!" })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ success, "errror": "Internal server error!" })
    }
    
}
export default connectToDb(handler);
