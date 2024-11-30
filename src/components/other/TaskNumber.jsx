import React from 'react'

export default function TaskNumber({data}) {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className=' rounded-xl p-10 py-6 px-9 w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'> {data.value.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'> Failed</h3>
        </div>
        <div className=' rounded-xl p-10 py-6 px-9 w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'> {data.value.taskCount.newTask}</h2>
        <h3 className='text-xl font-medium'> New Task</h3>
        </div>
        <div className=' rounded-xl p-10 py-6 px-9 w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'> {data.value.taskCount.active}</h2>
        <h3 className='text-xl font-medium'> Active</h3>
        </div>
        <div className=' rounded-xl p-10 py-6 px-9 w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold'> {data.value.taskCount.completed} </h2>
        <h3 className='text-xl font-medium'> Completed</h3>
        </div>
    </div>
  )
}
