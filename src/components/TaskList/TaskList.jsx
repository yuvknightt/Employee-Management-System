import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

export default function TaskList({data}) {
  
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
     {data.value.tasks.map((elem, idx)=>{
      if(elem.active){
        return <AcceptTask key={idx} />
      }
      if(elem.NewTask){
        return <NewTask key={idx}/>
      }
      if(elem.CompleteTask){
        return <CompleteTask key={idx}/>
      }
      if(elem.FailedTask){
        return <FailedTask key={idx}/>
      }
     }

     )}
    </div>
  )
}
