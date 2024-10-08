import React from 'react'

export default function Newsletter() {
  return (
    <div>
    <h1 className='font-bold text-center text-lg md:text-3xl m-4'>Shopping Hub - <span className='font-normal'> Get all you Need at the go | One Stop Shopping Destination</span></h1>

    <h1 className='font-bold text-center text-lg'>Join our Newsletter</h1>
    <h2 className='text-center tracking-wider'>Be the first to get latest and great offers from us by subscribing to our newsletter</h2>
    <h2 className='text-center font-bold text-lg md:text-2xl text-gray-600'>Join 100+ Happy Subscribers.</h2>
    <div className='flex justify-center p-4'>
        <form action="" method="post">
            <input type="text" placeholder='Enter your fullname' className='border-2 border-gray-300 rounded-md outline-none w-full placeholder-gray-400 placeholder:p-4  h-10 m-2' />
            <input type="email" placeholder='Enter your email' className='border-2 border-gray-300 rounded-md outline-none w-full placeholder-gray-400 placeholder:p-4  h-10 m-2' /> 
            <button type='submit' className='bg-orange-500 text-white hover:text-black h-10 px-6 rounded-md w-full md:ml-4 font-semibold'>JOIN NOW</button>
        </form>
    </div>
    </div>
  )
}
