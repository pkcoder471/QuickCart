import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='nav flex justify-between items-center p-2 alg shadow-md'>
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
          <Link href={'/sticker'} className='cursor-pointer'><li>Stickers</li></Link>
          <Link href={'/mugs'} className='cursor-pointer'><li>Mugs</li></Link>
        </ul>
      </div>
      </div>
      <div className="user flex space-x-2">
        <div className="Cart ">
          <FaShoppingCart className='text-xl md:text-2xl cursor-pointer'/>
        </div>
        <div className="profile ">
        <IoPersonCircleSharp className='text-xl md:text-2xl cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
