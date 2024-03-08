import connectToDb from '@/middleware/mongoose';
import Order from '@/models/Order';
import crypto from "crypto";

const handler = async (req, res) => {

    const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const generated_signature = crypto.createHmac('sha256', process.env.NEXT_PUBLIC_KEY_SECRET)
                                      .update(body.toString())
                                      .digest('hex');

    if (generated_signature == razorpay_signature) {
        await Order.findOneAndUpdate({orderId:razorpay_order_id},{status:"PAID",paymentInfo:req.body});
        res.redirect('/order',200)
        return res.status(200).json({ "success": true })
    }
    else{
        return res.status(200).json({ "success": false })

    }
}
export default connectToDb(handler);
