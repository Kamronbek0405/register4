import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { loadState } from '../config/storage'
import { Header } from './header'


export const MainLayout = () => {
    const user =  loadState("user")
    if(!user) return <Navigate to={'/login'}/>
  return (
    <div className='flex w-[100%] h-[100vh] '>
       <div className='w-[450px] h-auto bg-slate-500'>
      

       </div>
       <div className='w-[1200px] h-[700px]  flex flex-col items-center justify-between '>
        <header className='w-[100%] '>
            <Header/>
        </header>
        <Outlet/>
       </div>
    </div>
  )
}
