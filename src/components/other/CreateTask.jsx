import React from 'react'

const CreateTask = () => {
  return (
    <div>
        <form className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
            <div className='text-sm text-gray-300 mb-0.5'>
            <h3>Task Title</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Enter your Input Here'/>
            </div>
            <div >     
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date"/>
            </div>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='design/dev'/>
            </div>
           <div>
             <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
           <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Name'/>
           </div>
            
            
        
        
            </div>
            
            <div className='w-2/5 flex flex-col items-start'>
             <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
             <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]' name="" id="" cols="25" rows="15"></textarea>
            <br />
             <button className='text-sm hover:bg-emerald-600 rounded mt-4 w-full'>Create Task</button>
             </div>
         
          
        </form>
     </div>
  )
}

export default CreateTask
