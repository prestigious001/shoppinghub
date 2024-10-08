import React from 'react'
// import ad1 from "../Assets/ads1.png";
// import ad2 from "../Assets/ads2.png";
import  GadgetListings  from "./GadgetListings";



export default function Gadgetdeals() {
  return (
    <div >
        
        <h1 className='text-lg font-semibold text-center py-1 mt-4 text-gray-800'>Gadget Deals</h1> 
        <div className='overflow-x-auto whitespace-nowrap mx-4 flex'>
        {GadgetListings.map((item => ( 
            <div key={item.id} className='scale-90'>
               <div   className='bg-slate-100 rounded-md w-36 p-2 flex flex-col justify-center shadow-lg relative hover:scale-105'>
                <span className='bg-orange-100 text-orange-600 w-10 absolute right-0 top-0 font-medium rounded-lg flex justify-center'>{item.discount}</span>
                <img src={item.image}className='h-20' alt="" />
                <p className='mt-2'>{item.productdescription}</p>
                <div className='text-sm mt-1'>
                    <span className='font-bold mr-2'>{item.oldprice} </span>
                    <span className='line-through text-gray-500'> {item.currentprice}</span>
                </div>
                <a href="https://wa.link/vpgifv">
              <button className='bg-orange-400 font-semibold text-white px-6 py-1 mt-2 rounded-md hover:text-black'>BUY NOW</button>
                </a>      
             </div>
            </div>
              
            )))}
        </div>
           
        
    </div>
  )
}
