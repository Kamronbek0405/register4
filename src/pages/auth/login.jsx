import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { request } from '../../config/request'
import { saveState } from '../../config/storage'

export const Login = () => {
    const {handleSubmit, register,} = useForm()
    const navigate = useNavigate()
    const submit = (data) =>{
        request.post('/login', data).then((res) =>{
        saveState('user' , {...res.data.user, token: res.data.accessToken})
        navigate('/', {
            replace: true
        })

        })
    }
  return (
    <div className='flex items-center justify-center h-[100vh] '>
    <div className='w-[500px] h-[450px] rounded-2xl bg-white shadow-xl shadow-gray-400 border-2 border-gray-300 p-12 flex flex-col justify-between items-center'>
        <h1 className='text-4xl font-bold text-blue-400'>Login</h1>
        <form className='flex flex-col gap-5 w-[300px] items-center ' onSubmit={handleSubmit(submit)}>
           
            <input className='w-[400px] h-[50px] rounded-xl px-4 outline-1 outline-gray-400 border-2 border-blue-300 hover:shadow-sm  ' {...register("email", {required: true})} type="email" placeholder='Email kiriting' />
            <input className='w-[400px] h-[50px] rounded-xl px-4 outline-1 outline-gray-400 border-2 border-blue-300 hover:shadow-sm  ' {...register("password", {required: true})} type="password" placeholder='Parol kiriting' />
            <button  className='w-[400px] h-[50px] bg-violet-400 hover:bg-violet-500 rounded-full text-white text-lg font-medium'  type='submit'>Send</button>
             <Link className='w-[400px] h-[50px]  flex items-center justify-center bg-blue-400 hover:bg-blue-500 rounded-full text-white text-lg font-medium' to={"/register"}>Register</Link>
        </form>
    </div>
</div>
  )
}
