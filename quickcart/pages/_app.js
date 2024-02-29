import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setsubTotal] = useState(0)
  const [user, setUser] = useState({value:null})
  const [key, setKey] = useState()
  const router = useRouter();
  
  useEffect(() => {
    try {
      if(localStorage.getItem('token')){
        setUser({value:localStorage.getItem('token')});
      }
    } catch (err) {
      console.log(err);
    }
  }, [router.query]);
  
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

  const buyNow = (itemCode, qty, price, color, size, name) =>{
    clearCart();
    let myCart={};
    myCart[itemCode]={qty, price, color, size, name};
    setCart(myCart);
    saveCart(myCart);
    router.push('/checkout');
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
  <Navbar buyNow={buyNow} user={user} cart={cart} addToCart={addToCart} removeItemCart={removeItemCart} clearCart={clearCart} subTotal={subTotal} />
  <Component buyNow={buyNow} user={user} cart={cart} addToCart={addToCart} removeItemCart={removeItemCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
}
