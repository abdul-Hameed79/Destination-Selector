import TourList from './components/TourList';
import places from './Data.js';

const App = () => {
  return (
    <div className="container mx-auto my-6">
        <TourList places={places} />
      </div>
    );
};

export default App;
