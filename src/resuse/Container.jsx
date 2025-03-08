import React from 'react'

export default function Container({amount ,title}) {
  return (
    <div className='container  '>
    <div className='w-[250px] h-[170px] rounded shadow-[5px_5px_5px_black] flex flex-col justify-center items-center'>
      <h1 className='text-center font-bold text-[25px]'>{amount}</h1>
      <h6 className='text-gray-600 text-center'>{title}</h6>
    </div>
  </div>
  
  )
}
