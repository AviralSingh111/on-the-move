import React, { useState } from 'react';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
import Slide6 from './Slide6';
import Slide7 from './Slide7';
import Slide8 from './Slide8';
import { FaTimes } from 'react-icons/fa';


const SliderPopup = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heightClass, setHeightClass] = useState('h-[70%]');

  const handleExpand90 = () => {
    setHeightClass('h-[90%]');
  };
  const handleContract80 = () =>{
    setHeightClass('h-[80%]')
  }
  const handleContract65 = () =>{
    setHeightClass('h-[65%]')
  }
  const slides = [<Slide1 baseheight={handleContract80} />,
   <Slide2 baseheight={handleContract65}/>,
   <Slide3 onReadMore={handleExpand90} onReadLess={handleContract80} baseheight={handleContract80}/>,
   <Slide4 baseheight={handleContract80} />, 
   <Slide5 baseheight={handleContract65}/>,
   <Slide6 baseheight={handleContract65}/>,
   <Slide7 baseheight={handleContract80}/>,
   <Slide8 baseheight={handleContract65}/>];
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if(currentSlide > 0)
    {
        setCurrentSlide(currentSlide-1);
    }
  }
  return (
    <div className="fixed inset-0 flex justify-center items-end bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className={`relative bg-gray-700 rounded-t-lg shadow-lg w-full ${heightClass} transition-transform duration-300`}>
        <button
          className="absolute mt-2 right-2 text-white bg-gray-800 rounded-full hover:text-gray-900 p-2"
          onClick={onClose}
        >
          <FaTimes className="w-4 h-4" />
        </button>
        <div className={`absolute left-0 w-full flex ${ currentSlide>0 ? 'h-0' : 'justify-center items-center'} transition-transform duration-500`}
           style={{ transform: currentSlide > 0 ? 'translateY(-70%) translateX(-10%)' : 'translateY(0)' }}>
        <div className={`transition-all duration-500 ${currentSlide > 0 ? 'transform scale-50 translate-y-10 flex space-x-6 items-center text-xl text-gray-300' : 'transform scale-100 translate-y-0 block text-center'}`}>
          <img src={`${process.env.PUBLIC_URL}/profile.jpeg`} alt="Profile" className="w-16 h-16 mt-6 rounded-lg mx-auto" />
          <h1 className={`text-xl text-purple-400 mt-4 ${currentSlide > 0 ? 'text-base text-gray-400':''}`}>Your Journey Reflection</h1>
        </div>
      </div>
        <div className="h-full flex flex-col justify-between">
          <div className="h-full flex justify-center items-center transition-transform duration-300">
            {slides[currentSlide]}
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <div className="flex space-x-1 mb-4">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-8 h-1 rounded-lg transition-all duration-300 ${
                    index <= currentSlide ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <button
              className={`px-4 py-2 w-full rounded-lg bg-purple-400 text-black`}
              onClick={nextSlide}
            >
              {currentSlide === slides.length - 1 ? 'Take Survey' : 'Next'}
            </button>
            <button
              className={`text-purple-400 text-center text-lg mt-4`}
              onClick={prevSlide}
            >
             {currentSlide > 0 ? 'Back' : ''}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderPopup;
