import connectToDb from '@/middleware/mongoose';
import Order from '@/models/Order';
import Razorpay from 'razorpay';

const handler = async (req, res) => {

    let success = false;
    if (req.method === 'POST') {
        const instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.NEXT_PUBLIC_KEY_SECRET })

        const order = await instance.orders.create({
            amount: Number(req.body.subTotal*100),
            currency: "INR",
        })
        success = true;
        return res.status(200).json(order)
    }
    else {
        return res.status(400).json({ "errror": "Bad Request!" })
    }
}
export default connectToDb(handler);
