import connectToDb from '@/middleware/mongoose';
import Order from '@/models/Order';
import Razorpay from 'razorpay';

const handler = async (req, res) => {

    let success = false;
    const {email, address, subTotal, cart} = req.body;
    try {
        if (req.method === 'POST') {
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
            console.log(newOrder);
            success = true;
            return res.status(200).json(order)
        }
        else {
            return res.status(400).json({ "errror": "Bad Request!" })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ "errror": "Internal server error!" })
    }
    
}
export default connectToDb(handler);
