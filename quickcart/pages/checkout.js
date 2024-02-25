import React from 'react'
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";

const checkout = ({addToCart, cart, removeItemCart, subTotal}) => {
  return (
    <div className='container flex flex-col items-center px-48'>
      <h1 className='text-3xl font-bold mt-10'>Checkout</h1>
      <div className="details w-full">
        <h2 className='text-2xl font-bold items-start my-2'>1. Personal Details</h2>
        <form className='flex flex-row flex-wrap'>
          <div className='flex flex-col  w-1/2 my-2'>
          <label htmlFor="name">Name</label>
          <input type='text' className='w-[90%] border-2 border-gray-400 focus:outline-none rounded px-2 py-1' id='name' name='name'/>
          </div>
          <div className='flex flex-col w-1/2 my-2'>
          <label htmlFor="email">Email</label>
          <input type='email' className='w-[90%] border-2 border-gray-400 focus:outline-none rounded px-2 py-1' id='email' name='email'/>
          </div >
          <div className='flex flex-col w-full my-2'>
          <label htmlFor="address">Address</label>
          <textarea type='text' className='w-[95%] border-2 border-gray-400 focus:outline-none rounded px-2 py-1' rows={3} id='address' name='address'/>
          </div>
          <div className='flex flex-col  w-1/2 my-2'>
          <label htmlFor="Phone">Phone</label>
          <input type='tel' className='w-[90%] border-2 border-gray-400 focus:outline-none rounded px-2 py-1' id='Phone' name='Phone'/>
          </div>
          <div className='flex flex-col w-1/2 my-2'>
          <label htmlFor="City">City</label>
          <input type='text' className='w-[90%] border-2 border-gray-400 focus:outline-none rounded px-2 py-1' id='City' name='City'/>
          </div >
          <div className='flex flex-col  w-1/2 my-2'>
          <label htmlFor="State">State</label>
          <input type='text' className='w-[90%] border-2 border-gray-400 focus:outline-none rounded px-2 py-1' id='State' name='State'/>
          </div>
          <div className='flex flex-col w-1/2 my-2'>
          <label htmlFor="Pincode">Pincode</label>
          <input type='text' className='w-[90%] border-2 border-gray-400 focus:outline-none rounded px-2 py-1' id='Pincode' name='Pincode'/>
          </div >
          
          </form>
      </div>
      <div className="items w-full">
      <h2 className='text-2xl font-bold items-start my-2'>2. Review Cart items</h2>
      <main className='items flex flex-col space-y-5 w-[100%] mt-10 items-start'>
          {Object.keys(cart).length===0 && <div className='text-md font-semibold'>
            Your Cart is Empty!
          </div> }
          {Object.keys(cart).length!=0 && Object.keys(cart).map((item)=>{
          return <div key={item} className='item bg-white h-32 w-[100%] shadow-md rounded-sm flex flex-col'>
            <div className='desc h-[60%] flex flex-row items-center '>
               <div className="image w-[30%] p-36 "><img alt="ecommerce"  className="h-[100%] w-[100%] m-auto block" src="https://m.media-amazon.com/images/I/61b4R3TMXoL._SY879_.jpg"/></div>
               <div className="item-desc text-md w-[50%] p-3">{cart[item].name}({cart[item].size}/{cart[item].color})</div>
               <div className="qty w-[30%] flex space-x-1 items-center">
                <span className='cursor-pointer' onClick={()=>{removeItemCart(item,1)}} ><AiOutlineMinusSquare/></span>
                <p>{cart[item].qty}</p>
                <span className='cursor-pointer' onClick={()=>{addToCart(item,1,cart[item].price,cart[item].color,cart[item].size,cart[item].name)}} ><AiOutlinePlusSquare /></span></div>
              </div>
            <button className="remove h-[40%]  border-gray-200 border-t-2 " onClick={()=>{removeItemCart(item,cart[item].qty)}}>Remove</button>
          </div>
          })}
        </main>
        {Object.keys(cart).length!==0 && <div className='totalSum mt-5'>
        <button type="button" onClick={()=>{clearCart()}} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay ₹{subTotal}</button>  </div>}
      </div>
    </div>
  )
}

export default checkout
