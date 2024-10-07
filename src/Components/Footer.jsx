import logo from '../Assets/logo.png'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black md:flex p-4 mt-4'>
        <a href="/">
         <img src={logo} alt="shopping hub logo" className="h-10 " />
        </a>

        <div className='text-gray-400 font-semibold ml-4 flex gap-6 justify-evenly' >
          <a href="/">
          CHAT WITH US
          </a>
          <a href="/">
          REPORT A PRODUCT
          </a>
          <a href="/">
         TERMS & CONDITIONS
          </a>
          <a href="/">
          HELP CENTER
          </a>
          <a href="/">
          PARTNER WITH US
          </a>
          <a href="/">
         MAKE INQUERY
          </a>
          <a href="/">
         GIVE SUGGESTIONS
          </a>
        </div>


    </div>
  )
}
