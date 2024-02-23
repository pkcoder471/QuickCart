import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const Navbar = () => {
  const ref = useRef()
  const handleCart = () =>{
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }
    else{
      ref.current.classList.add('translate-x-full');
      ref.current.classList.remove('translate-x-0');
    }
  }
  return (
    <div className='nav flex bg-white justify-between items-center p-2 alg shadow-md sticky top-0  '>
      <div className="hamburger-icon md:hidden cursor-pointer">
      <GiHamburgerMenu className='text-xl'/>
      </div>
      <div className="logo flex items-center">
      <Link href={'/'} className='flex items-center'><Image className='cursor-pointer' src="/quickcart_logo.png" width={40} height={40}></Image>
      <h1 className='font-semibold text-xl cursor-pointer'>QuickCart</h1></Link>
      <div className=" list md:flex ml-5 md:static hidden  absolute">
        <ul className='flex  space-x-3'>
          <Link href={'/hoodies'} className='cursor-pointer'><li>Hoodies</li></Link>
          <Link href={'/tshirts'} className='cursor-pointer'><li>Tshirts</li></Link>
          <Link href={'/stickers'} className='cursor-pointer'><li>Stickers</li></Link>
          <Link href={'/mugs'} className='cursor-pointer'><li>Mugs</li></Link>
        </ul>
      </div>
      </div>
      <div className="user flex space-x-2">
        <div className="Cart " onClick={handleCart}>
          <FaShoppingCart className='text-xl md:text-2xl cursor-pointer'/>
        </div>
        <div className="profile ">
        <IoPersonCircleSharp className='text-xl md:text-2xl cursor-pointer'/>
        </div>
      </div>
      <div ref={ref} className="sidebar bg-orange-300 w-72 h-screen absolute top-0 right-0 translate-x-full transform transition-transform">
        <div className="header px-6  py-8 flex justify-center bg-orange-300 sticky top-0 ">
        <h1 className='text-xl font-semibold'>Shopping Cart</h1>
        <span className='absolute top-0 right-0 p-5 cursor-pointer text-xl'><IoCloseCircle onClick={handleCart}/></span>
        </div>
        <main className='items flex flex-col space-y-5 w-[100%] max-h-[72vh]  overflow-y-scroll items-center'>
          <div className='item bg-white h-32 w-[80%] shadow-md rounded-sm flex flex-col'>
            <div className='desc h-[60%] flex flex-row items-center '>
               <div className="image w-[30%] p-3 "><img alt="ecommerce"  className="h-[100%] w-[100%] m-auto block" src="https://m.media-amazon.com/images/I/61b4R3TMXoL._SY879_.jpg"/></div>
               <div className="item-desc text-xs w-[50%] p-3">QuickCart Premium tshirst(XL/black)</div>
               <div className="qty w-[30%] flex space-x-1 items-center">
                <span className='cursor-pointer'><AiOutlinePlusSquare/></span>
                <p>1</p>
                <span className='cursor-pointer'><AiOutlineMinusSquare /></span></div>
              </div>
            <button className="remove h-[40%]  border-gray-200 border-t-2 ">Remove</button>
          </div>
          <div className='item bg-white h-32 w-[80%] shadow-md rounded-sm flex flex-col'>
            <div className='desc h-[60%] flex flex-row items-center '>
               <div className="image w-[30%] p-3 "><img alt="ecommerce"  className="h-[100%] w-[100%] m-auto block" src="https://m.media-amazon.com/images/I/61b4R3TMXoL._SY879_.jpg"/></div>
               <div className="item-desc text-xs w-[50%] p-3">QuickCart Premium tshirst(XL/black)</div>
               <div className="qty w-[30%] flex space-x-1 items-center">
                <span className='cursor-pointer'><AiOutlinePlusSquare/></span>
                <p>1</p>
                <span className='cursor-pointer'><AiOutlineMinusSquare /></span></div>
              </div>
            <button className="remove h-[40%]  border-gray-200 border-t-2 ">Remove</button>
          </div>
        </main>
        <footer className='totalSum flex items-center flex-col space-y-2 p-3'>
          <p className='font-semibold'>Total Amount: ₹499</p>
          <div>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CheckOut</button>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Clear Cart</button>        
          </div>
        </footer>
      </div>
    </div>
    
  )
}

export default Navbar
