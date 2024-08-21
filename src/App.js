import TourList from './components/TourList';
import places from './Data.js';

const App = () => {
  return (
    <div className="container mx-auto my-6">
      <h1 className='text-center text-3xl mb-10 font-extrabold'> 
        Select Your Destiny 
      </h1>
        <TourList places={places} />
      </div>
    );
};

export default App;
