import React from 'react'
import { useForm } from 'react-hook-form'
import { request } from '../../config/request'
import { Link, useNavigate } from 'react-router-dom'


export const Register = () => {
    const {handleSubmit, register, setError, formState:{errors}} = useForm()
    const navigate = useNavigate()
    const submit = (data) =>{
        request.post("/register", data).then((res) =>{
          if(res.data){
            navigate("/login")
          }
          console.log(res.data);
        }).catch((error) =>{
            setError('email', {message: "Bu emaildan foydalangansiz!!!"})
        })

    }
  return (
    <div className='flex items-center justify-center h-[100vh] bg-[url("https://ocdn.eu/pulscms-transforms/1/BmPk9kpTURBXy8zMWZlODg5ZDJmOWNiNDFlZDBhNDk2MTc3MzIxMGIzMi5qcGeSlQMAEM0D6M0CMpMFzQSwzQKk3gACoTAFoTEA")] bg-no-repeat bg-cover'>
        <div className='w-[500px] h-[600px] p-24 bg-white rounded-2xl flex flex-col justify-between items-center'>
            <h1 className='text-5xl font-bold text-blue-600'>Register</h1>
            <form className='flex flex-col items-center gap-5 w-[300px] ' onSubmit={handleSubmit(submit)}>
                <input className='w-[400px] h-[50px] rounded-xl px-4 outline-1 outline-gray-400 border-2 border-blue-300 hover:shadow-sm  ' {...register("name" , {required: true})} type="text" placeholder='Ismingizni kiriting' />
                <input className='w-[400px] h-[50px] rounded-xl px-4 outline-1 outline-gray-400 border-2 border-blue-300 hover:shadow-sm  ' {...register("email", {required: true}) } type="email" placeholder='Email kiriting' />
                {errors.email && <p className='text-red-800'>{errors.email.message}</p>}
                <input className='w-[400px] h-[50px] rounded-xl px-4 outline-1 outline-gray-400   border-2 border-blue-300 hover:shadow-sm  ' {...register("password", {required: true})} type="password" placeholder='Parol kiriting' />
                <button className='w-[400px] h-[50px] bg-violet-400 hover:bg-violet-500 rounded-full text-white text-lg font-medium' type='submit'>Send</button>
                <Link className='w-[400px] h-[50px]  flex items-center justify-center bg-blue-400 hover:bg-blue-500 rounded-full text-white text-lg font-medium' to={"/login"}>Login</Link>
            </form>
        </div>
    </div>
  )
}
