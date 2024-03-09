import connectToDb from '@/middleware/mongoose';
import Order from '@/models/Order';
import Product from '@/models/Product';
import Razorpay from 'razorpay';

const handler = async (req, res) => {

    let success = false;
    const {email, name, address, phone, pincode, subTotal, cart} = req.body;
    try {
        if (req.method === 'POST') {

            let total = 0;
            for(let item in cart){
                total+=cart[item].price*cart[item].qty;
                let product = await Product.findOne({itemCode:item});
                if(product.price!==cart[item].price){
                    return res.status(200).json({ success, "error": "Price of some item have changed, Please try again!" })
                }
                if(product.qty<cart[item].qty){
                    return res.status(200).json({ success, "error": "Some items in your cart are currently Out of Stock!" })
                }
            }
            if(total!==subTotal){
                return res.status(200).json({ success, "error": "Price of some item have changed, Please try again!" })
            }

            if(phone.length!==10 || !Number.isInteger(Number(phone))){
                return res.status(200).json({ success, "error": "Enter a valid phone number!" })
            }
            if(pincode.length!==6 || !Number.isInteger(Number(pincode))){
                return res.status(200).json({ success, "error": "Enter a vaild pincode!" })
            }


            const instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.NEXT_PUBLIC_KEY_SECRET })
    
            const order = await instance.orders.create({
                amount: Number(subTotal*100),
                currency: "INR",
            })
    
            let newOrder = new Order({
                email,
                name,
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
            return res.status(400).json({ success, "error": "Bad Request!" })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ success, "error": "Internal server error!" })
    }
    
}
export default connectToDb(handler);
