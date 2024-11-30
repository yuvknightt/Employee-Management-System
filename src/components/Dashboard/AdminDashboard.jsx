import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
  return (
    <div className= 'p-5 bg-[#1c1c1c] mt-7 rounded'>
     <Header/>
    <CreateTask/>
    <AllTask/>
    </div>
  )
}

export default AdminDashboard
