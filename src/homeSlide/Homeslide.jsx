import React, { useState } from 'react'

export default function Homeslide() {
    const[initails, setInitial] = useState("image")
  return (
    <div>
         <div className=' flex m-3 p-2 bg-gray-400 rounded-full justify-center gap-5 items-center w-[40%]'>
            <h2 className={`font-bold  px-4 py-2 rounded-full cursor-pointer ${initails === "image" ? "bg-white" :""}`}
            onClick={()=>setInitial("image")}
             >images</h2>
            <h2 className={`font-bold px-4 py-2 rounded-full cursor-pointer ${initails === "video" ?"bg-white":""}`}
            onClick={()=>setInitial("video")}
            >Videos</h2>
            <h2 className={`font-bold px-4 py-2 rounded-full cursor-pointer ${initails === "set" ? "bg-white":""}`}
            onClick={()=>setInitial("set")}
            >sets</h2>
         </div> 
         <div className='flex justify-center gap-10'>
        {initails === "image" && <h1>image</h1> } 
        {initails === "video" && <h1>videos</h1>} 
        {initails === "set" && <h1>sets</h1> }
         
         </div>
        
    </div>
  )
}
