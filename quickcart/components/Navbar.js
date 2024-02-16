import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className='nav flex'>
      <div className="hamburger-icon">
      <GiHamburgerMenu />
      </div>
      <div className="logo">
      <h1>QuickCart</h1>
      </div>
      <div className="list absolute mt-5">
        <ul>
          <li>Tshirts</li>
          <li>Hoodies</li>
          <li>Stickers</li>
          <li>Mugs</li>
        </ul>
      </div>
      <div className="user">
        <div className="Cart">Cart</div>
        <div className="profile">Profile</div>
      </div>
    </div>
  )
}

export default Navbar
