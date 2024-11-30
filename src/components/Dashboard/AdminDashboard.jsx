import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-5 bg-[#1c1c1c] mt-7 rounded'>
     <Header/>
     <div>
        <form className='flex flex-wrap w-full bg-red-200 items-start justify-between'>
            <div className='w-1/2'>
           < div>
            <h3>Task Title</h3>
            <input type="text" placeholder='Enter your Input Here'/>
            </div>
            <div>
            <h3>Date</h3>
            <input type="date"/>
            </div>
            <div>
            <h3>Category</h3>
            <input type="text" placeholder='design/dev'/>
            </div>
           <div>
             <h3>Assign to</h3>
           <input type="text" placeholder='Name'/>
           </div>
            
            
            <br />
            <button className='rounded border-spacing-1 border py-1'>Create Task</button>
            </div>
            
            <div className='px-20'>
             <h3>Description</h3>
             <textarea name="" id="" cols="25" rows="15"></textarea>
             </div>
         
          
        </form>
     </div>
    </div>
  )
}

export default AdminDashboard
