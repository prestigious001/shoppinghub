import logo from '../Assets/logo.png'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black  py-2 mt-4'>
      <div className=' md:flex m-4'>
      <a href="/">
         <img src={logo} alt="shopping hub logo" className="h-10 my-4 md:m-0 " />
        </a>

        <div className='text-gray-400 grid grid-cols-3 text-sm font-semibold ml-4 md:flex md:flex-row gap-6 md:mt-2 justify-evenly' >
          <a href="/">
          CHAT WITH US
          </a>
          <a href="/">
          REPORT 
          </a>
          <a href="/">
         TERMS & CONS
          </a>
          <a href="/">
          HELP CENTER
          </a>
          <a href="/">
          PARTNER
          </a>
          {/* <a href="/">
         MAKE INQUERY
          </a> */}
          <a href="/">
         SUGGESTIONS
          </a>
        </div>

      </div>
      
        <hr />
      <p className='text-gray-500 text-center mt-4'>
      all right reserved shoppinghub
      </p>


    </div>
  )
}
