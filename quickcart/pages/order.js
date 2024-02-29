import React from 'react'

const orders = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">QUICKCART.COM</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #52666</h1>
        <p>Your Order has been successfully placed!</p>
        <div className="flex mb-4">
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Item Description</a>
          <a className="flex-grow border-b-2 border-gray-300 text-end py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow border-b-2 border-gray-300 text-end py-2 text-lg px-1">Item Total</a>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">QuickCart Premium Tshirt(XL/Red)</span>
          <span className="ml-auto text-gray-500">1</span>
          <span className="ml-auto text-gray-900">₹499</span>
        </div><div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">QuickCart Premium Tshirt(XL/Red)</span>
          <span className="ml-auto text-gray-500">1</span>
          <span className="ml-auto text-gray-900">₹499</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">QuickCart Premium Tshirt(XL/Red)</span>
          <span className="ml-auto text-gray-500">1</span>
          <span className="ml-auto text-gray-900">₹499</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">Total Amount: ₹499</span>
          <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Cancel Order</button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 lg:h-auto lg:pl-20 lg:pr-36 lg:pb-36 h-80 m-auto rounded" src="https://m.media-amazon.com/images/I/61b4R3TMXoL._SY879_.jpg"/>
    </div>
  </div>
</section>
  )
}

export default orders
