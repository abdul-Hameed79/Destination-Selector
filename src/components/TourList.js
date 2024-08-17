import React, { useState } from 'react';
import TourCard from './TourCard';

const TourList = ({ places }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [remainingPlaces, setRemainingPlaces] = useState(places);

  const handleConfirm = (id) => {
    const place = remainingPlaces.find((p) => p.id === id);
    setSelectedPlace(place);
  };

  const handleNotInterested = (id) => {
    const newPlaces = remainingPlaces.filter((p) => p.id !== id);
    setRemainingPlaces(newPlaces);
  };

  const handleRefresh = () => {
    setSelectedPlace(null);
    setRemainingPlaces(places);
  };

  if (selectedPlace) {
    return (
      <div className='mt-4 w-1/4 h-2/4 object-fit mx-auto'>
      <TourCard place={selectedPlace} onConfirm={() => {}} onNotInterested={() => {}} />
      </div>
    )
  }

  if (remainingPlaces.length === 0) {
    return (
      <div className="text-center mt-10">
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" 
          onClick={handleRefresh}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="flex-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {remainingPlaces.map((place) => (
        <TourCard 
          key={place.id} 
          place={place} 
          onConfirm={handleConfirm} 
          onNotInterested={handleNotInterested} 
        />
      ))}
    </div>
  );
};

export default TourList;
