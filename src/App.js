import React, { useState } from 'react';
import SliderPopup from './components/SliderPopup';
const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relativ flex justify-center items-center">
      <button
        className="px-4 py-2 mt-20 bg-blue-600 text-white rounded"
        onClick={openPopup}
      >
        Open Slider
      </button>
      {isPopupOpen && <SliderPopup onClose={closePopup} />}
    </div>
  );
};

export default App;
