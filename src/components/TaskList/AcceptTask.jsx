import React from 'react'

const AcceptTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className='text-sme'>20 NOV 2024</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
    <p className='text-sm mt-2'>Hi hello</p>
    <div className='flex justify-between mt-4'>
        <button className='text-sm py-1 px-2 bg-green-500'>Mark as Completed</button>
    <button className='text-sm py-1 px-2 bg-red-500'>Mark as Failed</button>
    </div>
  </div>
  )
}

export default AcceptTask
