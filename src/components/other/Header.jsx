import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

export default function Header({data}) {

const logOutUser = () =>{
  localStorage.setItem('loggedInUser','')
}


  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>🄷🄴🄻🄻🄾  <br/> <span className='text-3xl font-semibold'></span> </h1>

      <button className='text-white bg-red-500 px-5 py-2 rounded-sm font-medium'> Log Out</button>

    </div>
  )
}
