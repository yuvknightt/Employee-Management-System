import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sme'>20 NOV 2024</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold'>Model Training GPT3.5</h2>
    <p className='text-sm mt-2'>Hi hello</p>
    <div><button className='w-full bg-red-900'>Failed</button></div> 
  </div>
  )
}

export default FailedTask
