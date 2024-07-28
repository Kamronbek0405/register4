import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { request } from '../config/request'
import { saveState } from '../config/storage'

export const Form = () => {
    const {handleSubmit, register, reset} = useForm()
    const navigate = useNavigate()
    const submit = (data) =>{ 
        request.post("/messages", data).then((res) =>{
        res.data.name;
        reset()
        
        })
     }
    
  return (
    <div className='flex items-center justify-center h-[100vh] absolute top-2 right-60 z-10'>
    <div className='w-[500px] h-[450px] rounded-2xl bg-white shadow-xl shadow-gray-400 border-2 border-gray-300 p-12 flex flex-col justify-between items-center'>
      
        <form  className='flex flex-col gap-5 w-[300px] items-center ' onSubmit={handleSubmit(submit)}>
            <input className='w-[400px] h-[50px] rounded-xl px-4 outline-1 outline-gray-400 border-2 border-blue-300 hover:shadow-sm  ' {...register("title", {required: true})} type="text" placeholder='malumot kiriting' />
            <input className='w-[400px] h-[50px] rounded-xl px-4 outline-1 outline-gray-400 border-2 border-blue-300 hover:shadow-sm  ' {...register("description", {required: true})} type="text" placeholder='malumot kiriting' />
            <button  className='w-[400px] h-[50px] bg-violet-400 hover:bg-violet-500 rounded-full text-white text-lg font-medium'  type='submit'>Send</button>
        </form>
    </div>
</div>
  )
}

