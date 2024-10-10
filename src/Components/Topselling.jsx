import React from 'react'
import  Topitems  from "./Topitems";



export default function Topselling() {
  return (
    <div >
        
        <h1 className='text-lg  text-center mt-8 text-gray-800 font-bold'>Top Selling Items</h1> 
        <div className='overflow-x-auto whitespace-nowrap mx-4 flex overflow-hidden'>
        {Topitems.map((item => ( 
            <div key={item.id} className='scale-90'>
               <div   className='bg-slate-100 rounded-md  p-2 flex flex-col items-center justify-center shadow-lg relative hover:scale-105'>
                <span className='bg-orange-100 text-orange-600 w-10 absolute right-0 top-0 font-medium rounded-lg flex justify-center'>{item.discount}</span>
                <img src={item.image} className='h-24 w-24 ' alt="" />
                <p className='mt-2 uppercase'>{item.productdescription}</p>
                <div className='text-sm mt-1'>
                    <span className='font-bold mr-2'>₦{item.currentprice}</span>
                    <span className='line-through text-gray-500'> ₦{item.oldprice} </span>
                </div>
                <a href="https://wa.link/kp1lwl">
              <button className='bg-orange-400 font-semibold text-white px-6 py-1 mt-2 rounded-md hover:text-black'>BUY NOW</button>
                </a>
                </div>
            </div>
              
            )))}
        </div>       
    </div>
  )
}
