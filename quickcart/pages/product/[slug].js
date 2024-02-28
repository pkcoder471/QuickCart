import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Product from '@/models/Product';
import mongoose from 'mongoose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slug = ({ buyNow, addToCart, product, variants }) => {
  const router = useRouter();
  const [pincode, setPincode] = useState()
  const [display, setDisplay] = useState()
  const [newColor, setnewColor] = useState(product.color);
  const [newSize, setnewSize] = useState(product.size);

  const handleChange = (e) => {
    setPincode(e.target.value);
  }

  const handlePincode = async () => {
    const response = await fetch('http://localhost:3000/api/pincode');
    const json = await response.json();

    if (json.includes(parseInt(pincode))) {
      setDisplay(true);
      toast.success('Hooray, Pincode servicable', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    else {
      setDisplay(false);
      toast.error('Sorry, Pincode not servicable', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  const refreshVariant = (newColor, newSize) => {
    const url = `http://localhost:3000/product/${variants[newColor][newSize].slug}`;
    window.location = url;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <ToastContainer/>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-3/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 lg:h-auto lg:px-10 lg:pb-10 h-80 m-auto rounded" src={product.img} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">QuickCart</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}({product.size}/{product.color})</h1>

            <p className="leading-relaxed">{product.desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex items-center">
                <span className="mr-1">Color :</span>
                <div className="colors mt-1">
                  {Object.keys(variants).includes('red') && Object.keys(variants['red']).includes(newSize) && <button onClick={() => { refreshVariant("red", newSize) }} className={`border-2 ${product.color === "red" ? 'border-black' : 'border-gray-300'} ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variants).includes('green') && Object.keys(variants['green']).includes(newSize) && <button onClick={() => { refreshVariant("green", newSize) }} className={`border-2 ${product.color === "green" ? 'border-black' : 'border-gray-300'} ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variants).includes('yellow') && Object.keys(variants['yellow']).includes(newSize) && <button onClick={() => { refreshVariant("yellow", newSize) }} className={`border-2 ${product.color === "yellow" ? 'border-black' : 'border-gray-300'} ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variants).includes('black') && Object.keys(variants['black']).includes(newSize) && <button onClick={() => { refreshVariant("black", newSize) }} className="border-2 ${product.color === black? 'border-black':'border-gray-300'} ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                  {Object.keys(variants).includes('blue') && Object.keys(variants['blue']).includes(newSize) && <button onClick={() => { refreshVariant("blue", newSize) }} className={`border-2 ${product.color === "blue" ? 'border-black' : 'border-gray-300'} ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                  {Object.keys(variants).includes('pink') && Object.keys(variants['pink']).includes(newSize) && <button onClick={() => { refreshVariant("pink", newSize) }} className={`border-2 ${product.color === "pink" ? 'border-black' : 'border-gray-300'} ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none`}></button>}
                </div>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select value={newSize} onChange={(e) => { refreshVariant(newColor, e.target.value) }} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 text-base pl-3 pr-10">
                    {Object.keys(variants[product.color]).includes('S') && <option value={'S'}>S</option>}
                    {Object.keys(variants[product.color]).includes('M') && <option value={'M'}>M</option>}
                    {Object.keys(variants[product.color]).includes('L') && <option value={'L'}>L</option>}
                    {Object.keys(variants[product.color]).includes('XL') && <option value={'XL'}>XL</option>}
                    {Object.keys(variants[product.color]).includes('XXL') && <option value={'XXL'}>XXL</option>}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">₹499</span>
              <button onClick={() => { addToCart(product.itemCode, 1, product.price, newColor, newSize, product.name) }} className="flex ml-5 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Add to Cart</button>
              <button onClick={() => { buyNow(product.itemCode, 1, product.price, newColor, newSize, product.name) }} className="flex ml-5 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Buy Now</button>

            </div>
            <div className="flex mt-5">
              <input type='number' onChange={handleChange} className='pincode border-2 border-gray-400 focus:outline-none rounded px-2' placeholder='Enter your Pincode' name='pincode'  ></input>
              <button onClick={handlePincode} className="flex ml-5 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Check Pincode</button>
            </div>
            <div className="msg my-2">
              {(display != null && display) && <div><p className='text-green-600'>Hooray!! we deliver to this location</p></div>}
              {(display != null && !display) && <div><p className='text-red-600'>Sorry!! we do not deliver to this location</p></div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL);
  }

  let product = await Product.findOne({ itemCode: slug });
  let variants = await Product.find({ name: product.name });
  let colorSizeSlug = {};

  for (let item of variants) {
    if (item.color in colorSizeSlug) {
      colorSizeSlug[item.color][item.size] = { slug: item.itemCode };
    }
    else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.itemCode };
    }
  }
  return {
    props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) },
  };
}
export default Slug
