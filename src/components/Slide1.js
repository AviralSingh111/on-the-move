// Slide1.js
import React, { useEffect } from 'react';
import FirstChart from './charts/FirstChart';

const Slide1 = ({baseheight}) => {
  useEffect(()=>{
    baseheight();
  },)
  return (
    <div className="flex flex-col space-y-1 justify-center items-center h-1/2 text-white mt-20 px-4">
     <p className='px-8 w-4/5 text-sm mt-8'>Your dedication to fitness despite long work hours is inspiring. Keep experimenting and staying consistent - you're on the right path!</p>
     <p className='px-8 text-2xl'>Let's glance at your journey, <span className='text-purple-400'>Kritika!</span></p>
     <div className="mt-4">
      <FirstChart/>
     </div>
    </div>
  );
};

export default Slide1;
