import React from 'react'

const NewTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>Moderate</h3>
        <h4 className='text-sme'>20 NOV 2024</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold'>Make a Blog</h2>
    <p className='text-sm mt-2'>yup , hello</p>
 <div className='mt-4'>
    <button className='text-sm py-1 px-2 bg-green-500'>Accept Task</button>
 </div>
  </div> 
  )
}

export default NewTask
