import React from 'react';
import iconClose from '../assets/icon-close.svg';
import rulesImage from '../assets/image-rules.svg';

function Rules({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-4 md:p-8 relative w-[90%] max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold">RULES</h2>
          <button onClick={onClose}>
            <img src={iconClose} alt="Close" className="w-4 md:w-6 h-4 md:h-6" />
          </button>
        </div>
        <img src={rulesImage} alt="Rules" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Rules;
