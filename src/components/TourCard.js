// src/components/TourCard.jsx
import React from 'react';

const TourCard = ({ place, onConfirm, onNotInterested }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 transform transition duration-500 hover:scale-105 hover:shadow-l">
      <img src={place.image} alt={place.destination} className="w-full h-52 object-fit rounded-md" />
      <h3 className="text-xl font-bold mt-4">{place.destination}</h3>
      <p className="text-gray-600 mt-2">{place.description}</p>
      <p className="text-lg font-semibold mt-2">${place.price}</p>
      <div className="mt-4 flex justify-between">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" 
          onClick={() => onConfirm(place.id)}>
          Intrested
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300" 
          onClick={() => onNotInterested(place.id)}>
          Not Intrested
        </button>
      </div>
    </div>
  );
};

export default TourCard;
