import React, { useState } from 'react';
import TourCard from './TourCard';

const TourList = ({ places }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [remainingPlaces, setRemainingPlaces] = useState(places);

  const handleIntrested = (id) => {
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
      <div className='container mx-auto my-32 w-96 h-52 object-cover'>
        <TourCard 
          place={selectedPlace} 
          onIntrested={() => {}} 
          onNotInterested={() => {}} 
        />
      </div>
    )
  }

  if (remainingPlaces.length === 0) {
    return (
      <div className="text-center mt-60">
        <h1 className='text-white font-semibold text-3xl mb-10'>
          No Cards Left
        </h1>
        <button 
          className="text-xl text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300 hover:scale-90 hover:border-black"
          onClick={handleRefresh}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <h1 className='text-center text-slate-200 text-3xl mb-10 font-extrabold'> 
        Select Your Destiny 
      </h1>      
      <div className="flex-wrap grid grid-cols-3 gap-20">
        {remainingPlaces.map((place) => (
          <TourCard 
            key={place.id} 
            place={place} 
            onIntrested={handleIntrested} 
            onNotInterested={handleNotInterested} 
          />
        ))}
      </div>
    </>  
  );
};

export default TourList;
