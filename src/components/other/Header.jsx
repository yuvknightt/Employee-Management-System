import React from 'react'

export default function Header() {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello ! <br/> <span className='text-3xl font-semibold'></span> YUVRAJ </h1>

      <button className='text-white bg-red-500 px-5 py-2 rounded-sm font-medium'> Log Out</button>

    </div>
  )
}
