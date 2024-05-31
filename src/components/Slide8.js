import React, { useEffect } from 'react'

const Slide8 = ({baseheight}) => {
  useEffect(()=>{
    baseheight();
  })
  return (
    <div className='flex flex-col h-1/2 justify-center items-center text-white mt-14'>
      <p className='px-4 text-[14px]'>
        By following this future plan and addressing those areas for improvement, you'll be unstoppable on your quest for ultimate fitness glory! Get ready to conquer new heights and <span className='text-purple-400'>have an absolute blast along the way,Kritika!</span>
      </p>
      <p className='px-4 text-[14px] mt-6'>
        Take our Survey <span className='italic'>2 mins</span> to personalize your program and unlock even better results. <span className='text-purple-400'>Your feedback helps us crushing your goals!</span>
      </p>
    </div>
  )
}

export default Slide8