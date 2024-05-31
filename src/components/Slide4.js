import React, { useEffect } from 'react'

const Slide4 = ({baseheight}) => {
  useEffect(()=>{
    baseheight();
  })
  return (
    <div>
      Slide 4
    </div>
  )
}

export default Slide4