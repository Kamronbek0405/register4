import React from 'react'
import { request } from '../config/request'
import { loadState } from '../config/storage'
import { Number } from '../assets/number'

export const Catigory = () => {
    const [state, setState] = React.useState()

    const getData = () =>{
        request.get("/messages").then((res) =>{
            setState(res.data)
        
        })
    }

    React.useEffect(() =>{
       getData()
    }, [])

    const getDelete = ({id}) =>{
      request.delete(`/messages/${id}`).then((res)=>{
        console.log(res.id);
      })

    }

  return (
    <div className='w-[1100px] h-[85vh] bg-white flex items-center flex-col justify-center gap-5  absolute top-24'>
        
       <h1 className='text-black text-xl font-medium'>Catigory</h1>
      {state?.map((item) => 
      
       <div key={item.id} {...item} className='w-[500px] h-[400px]  flex  items-center justify-between rounded-xl px-5 shadow-lg shadow-gray-400 border-2 border-gray-300 text-black '>
        <Number/>
       <div>
       <h1>{item.name}</h1>
        <h1 className='text-xl font-medium py-2'>{item.title}</h1>
        <p>{item.description}</p>
       </div>
        <button type='submit' onClick={getDelete}>Delete</button>
       </div >
      )}
    </div>
  )
}
