import React, { useEffect } from 'react'

const Slide7 = ({baseheight}) => {
  useEffect(()=>{
    baseheight();
  })
  const boxes = [{
    id:1,
    title:"Calorie Counting",
    description:"We've seen the ups and downs, and we know life gets busy.But, forming that solid habit of consistent workouts is your golden ticket.You've got the spirit; now let's turn that into a daily celebration of movement.",
  },
];
  return (
    <div className='text-white w-full h-1/2'>
      <h2 className='px-5 text-purple-400 mt-4 text-xl'>What More We Want To Track</h2>
      <p className='px-5 text-white mt-4 text-sm'>To take your fitness journey to the next level, we've got a few extra metrics to track that'll make you feel like a true <span className='text-puple-400'>fitness superhero</span></p>
      <div className='flex gap-5 overflow-hidden w-full px-5 mt-8'>
        {
          boxes.map((info,index)=>{
           return(
            <div className='w-[70%] h-[138px] rounded-lg bg-black overflow-hidden px-4 flex flex-col space-y-1 py-2'>
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

export default Slide7