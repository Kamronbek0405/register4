import React from 'react'
import { Logo } from '../assets/logo'
import { Form } from '../components/form'

export const Header = () => {
    const [show, setShow] = React.useState(!true)

    
  return (
    <div className='w-[100%] h-[72px] bg-slate-800 flex items-center justify-between px-5 relative '>
       <div className='flex'>
       <Logo/>
       <h1 className='text-white text-xl font-medium ml-3'>6 Suggestions</h1>
       <span className='flex gap-3 ml-16 items-center '>
        <span className='text-white'>Sort by :</span>
        <select className='bg-slate-800 text-white border-none'>
            <option  value="Most Upvotes"> Most Upvotes</option>
            <option value="Least Upvotes"> Least Upvotes</option>
            <option value="Most Comments">Most Comments</option>
            <option value="Least Comments">Least Comments</option>
        </select>
       </span>
       </div>
       {show && <Form />}
        {show && <button  className='text-white w-[160px] h-[50px] rounded-xl bg-violet-600 font-medium ' onClick={()=> setShow(false)}>+ Add Feedback</button>}
        {!show && <button className='text-white w-[160px] h-[50px] rounded-xl bg-violet-600 font-medium ' onClick={()=> setShow(true)}>+ Add Feedback</button>}
    </div>
  )
}
