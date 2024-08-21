// src/components/TourCard.jsx
import React, { useState } from 'react';

const TourCard = ({ place, onConfirm, onNotInterested }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-gray-300 shadow-md p-4 mb-4 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-slate-400 flex-wrap">
      <img src={place.image} alt={place.name} className="w-96 h-52 object-fill rounded-md" />
      <h3 className="text-xl font-bold mt-4">{place.name}</h3>
      <div className="mt-2">
        <p className="text-gray-600 inline">
          {isExpanded ? place.Description : `${place.Description.slice(0, 80)}...`}
        </p>
        <button 
          className="text-blue-400 hover:text-blue-600 ml-2" 
          onClick={toggleReadMore}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
      <p className="text-lg font-semibold mt-2">${place.price}</p>
      <div className="mt-4 flex justify-between">
        <button 
          className="text-lg text-green-500 border border-green-500 hover:text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 hover:scale-90" 
          onClick={() => onConfirm(place.id)}>
          Interested
        </button>
        <button 
          className="text-red-500 border border-red-500 hover:text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 hover:scale-90" 
          onClick={() => onNotInterested(place.id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default TourCard;
