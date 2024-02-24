import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setsubTotal] = useState(0)

  useEffect(() => {
    try {
      if(localStorage.getItem('cart')){
        setCart(JSON.parse(localStorage.getItem('cart')));
        saveCart(JSON.parse(localStorage.getItem('cart')));
      }
    } catch (err) {
      console.log(err);
      localStorage.clear();
    }
  }, [])
  
  const saveCart = (myCart) =>{
    localStorage.setItem("cart",JSON.stringify(myCart));
    const allItemCodes = Object.keys(myCart);
    let Amount=0;
    console.log(allItemCodes);
    for(let i=0;i<allItemCodes.length;i++){
      Amount+=(myCart[allItemCodes[i]].price*myCart[allItemCodes[i]].qty);
    }
    setsubTotal(Amount);
  }

  const addToCart = (itemCode, qty, price, color, size, name) =>{
    let myCart = cart;

    const allItemCodes = Object.keys(myCart);

    if(allItemCodes.includes(itemCode)){
      myCart[itemCode].qty = cart[itemCode].qty+qty;
      
    }
    else{
      myCart[itemCode]={qty, price, color, size, name};
    }
    setCart(myCart);
    saveCart(myCart);
  }

  const removeItemCart = (itemCode, qty) =>{
    let myCart = cart;
    const allItemCodes = Object.keys(myCart);

    if(allItemCodes.includes(itemCode)){
      myCart[itemCode].qty=cart[itemCode].qty-qty;
      if(myCart[itemCode].qty<=0){
        delete myCart[itemCode];
      }
    }
    setCart(myCart);
    saveCart(myCart);
  }

  const clearCart = () =>{
    setCart({});
    saveCart({});
  }

  return <>
  <Navbar cart={cart} addToCart={addToCart} removeItemCart={removeItemCart} clearCart={clearCart} subTotal={subTotal} />
  <Component cart={cart} addToCart={addToCart} removeItemCart={removeItemCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
}
