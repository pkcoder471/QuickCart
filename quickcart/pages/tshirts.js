import React from 'react'
import Link from 'next/link'

const tshirts = ({products}) => {
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-16 py-16 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Object.keys(products).length===0 && <div className="msg">item out of Stock</div> }
          {Object.keys(products).length!==0 && Object.keys(products).map((item)=>{
            return <Link href={`/product/${products[item].itemCode}`} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm cursor-pointer "><div>
            <a className="  relative h-80 m-auto rounded overflow-hidden">
              <img alt="ecommerce"  className="h-80 m-auto block" src={products[item].img}/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].name}</h2>
              <p className="mt-1">₹{products[item].price}</p>
            </div>
            <div className="sizes mt-1">
              {products[item].size.map((s)=>{
                  return <span className="sz border border-gray-500 px-1">{s}</span>
              })}
            </div>
            <div className="colors mt-1">
              {products[item].color.map((c)=>{
                  return <button className={`border-2 border-gray-300 ml-1 bg-${c}-500 rounded-full w-6 h-6 focus:outline-none`}></button>
              })}
            </div>
          </div></Link>})}
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps() { 
  const response = await fetch("http://localhost:3000/api/getTshirts", {
    method: "GET",
  });
  const json = await response.json();
  console.log(json);
  return { 
      props: { products: json }, 
  }; 
}

export default tshirts
