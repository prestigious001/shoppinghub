import React from 'react'
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { NavLink } from 'react-router-dom'

export default function Catigories() {
  return (
    <div className='flex p-2 space-x-2 md:justify-center w-full overflow-x-auto whitespace-nowrap'>
        <div className="newarrivals bg-slate-100 py-4  px-8 rounded-md text-orange-400 font-bold">
            {/* <NavLink to="/">
                Click Me
            </NavLink> */}
            <span>
                NEW ARRIVALS
            </span>
            
        </div>
        <div className="newarrivals bg-slate-100 py-4  px-8  rounded-md text-orange-400 font-bold">
            <span>
            TODAY’S HOT DEALS
            </span>
        </div>
        <div className="newarrivals bg-slate-100 p-4 py-4  px-8 rounded-md text-orange-400 font-bold">
            <span>
            TOP OFFER’S
            </span>
        </div>
        <div className="newarrivals bg-slate-100 p-4 py-4  px-8 rounded-md text-orange-400 font-bold">
            <span>
            GADGET DEALS
            </span>
        </div>
        <div className="newarrivals bg-slate-100 py-4  px-8 rounded-md text-orange-400 font-bold">
            <span>
            FASHION DEALS
            </span>
        </div>
        <div className="newarrivals bg-slate-100 py-4  px-8 rounded-md text-orange-400 font-bold">
            <span>
            GROCIRIES DEALS 
             </span>
        </div>
        <div className="newarrivals bg-slate-100 py-4  px-8 rounded-md text-orange-400 font-bold">
            <span>
            APP DEALS 
             </span>
        </div>
        <div className="newarrivals bg-slate-100 py-4  px-8 rounded-md text-orange-400 font-bold">
            <span>
            MOBILE DATA DEALS 
             </span>
        </div>
    </div>
  )
}
