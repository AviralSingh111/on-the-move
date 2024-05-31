import React, { useEffect } from 'react'

const Slide6 = ({baseheight}) => {
  useEffect(()=>{
    baseheight();
  })
  const boxes = [{
    id:1,
    title:"Month 1 Consistency",
    description:"this month once again. Variety's your friend here; let's keep things interesting",
  },
];
  return (
    <div className='text-white w-full h-1/2'>
    <h2 className='px-5 text-purple-400 mt-4 text-2xl'>Future Plan</h2>
    <div className='flex gap-5 overflow-hidden w-full px-5 mt-8'>
      {
        boxes.map((info,index)=>{
         return(
          <div className='w-[70%] h-auto rounded-lg bg-black overflow-hidden px-4 flex flex-col space-y-1 py-2'>
          <span key={info.id} className='text-[12px] text-purple-400'>{info.title}</span>
          <span className='bg-white h-[1px] w-full'/>
          <p className='text-[10px]'>{info.description}</p>
          </div>
         )
        })
      }
      </div>
  </div>
  )
}

export default Slide6