import React, { useEffect, useState } from 'react';
import SecondChart from './charts/SecondChart';

const Slide3 = ({ onReadMore, onReadLess, baseheight }) => {
  
  useEffect(()=>{
   baseheight();
  },[])
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (isExpanded) {
      onReadLess();
    } else {
      onReadMore();
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full h-auto mt-12 px-4'>
      <h2 className='text-gray-400 text-xs mt-6'>PERFORMACE STATS</h2>
      <h2 className='text-purple-400 text-2xl mt-1'>Workout Consistency Progress</h2>
      <div className="flex items-center justify-center">
      <SecondChart/>
     </div>
     <p className='text-white text-sm'>After the initial months of adjusting to the new lifestyle design, you were finally able to have a killer April. {isExpanded ? <span>The green bar of more
      than 20 workouts is a huge achievement in yourb fitness journey already! Another month of consistency and we can mark the Consistency Phase of your journey as completed!</span> : ''}</p>
      <button onClick={handleToggle} className='mt-4'>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default Slide3;
