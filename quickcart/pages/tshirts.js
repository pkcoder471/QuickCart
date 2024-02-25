import React from 'react'
import Link from 'next/link'

const tshirts = ({products}) => {
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-16 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((item)=>{
            return <Link href={`/product/${item.itemCode}`} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm cursor-pointer "><div>
            <a className="  relative h-80 m-auto rounded overflow-hidden">
              <img alt="ecommerce"  className="h-80 m-auto block" src={item.img}/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
              <p className="mt-1">₹{item.price}</p>
            </div>
          </div></Link>})}
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps() { 
  const response = await fetch("http://localhost:3000/api/getProducts?category=Tshirts", {
    method: "GET",
  });
  const json = await response.json()
  let Products = JSON.parse(JSON.stringify(json));
  return { 
      props: { products: Products.products }, 
  }; 
}

export default tshirts
