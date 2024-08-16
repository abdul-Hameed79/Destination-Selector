import DestinyList from './components/TourList';

const App = () => {

  const places = [
    {
      id:1,
      destination: "Ladhak",
      image: require('./assets/ladakh.jpg'),
      price: 29.99,
      description: "description of city 1",
    },
    {
      id:2,
      destination: "Agra",
      image: require('./assets/agra.webp'),
      price: 19.99,
      description: "description of city 2",
    },
    {
      id:3,
      destination: "Goa",
      image: require('./assets/goa.webp'),
      price: 20.99,
      description: "description of city 3",
    },
    {
      id:4,
      destination: "Maldives",
      image: require('./assets/maldives.jpg'),
      price: 59.99,
      description: "description of city 4",
    },
    {
      id:5,
      destination: "Jaipur",
      image: require('./assets/Jaipur.jpg'),
      price: 39.99,
      description: "description of city 5",
    },
    {
      id:6,
      destination: "Meghalaya",
      image: require('./assets/meghalaya.jpg'),
      price: 17.99,
      description: "description of city 6",
    },
    {
      id:7,
      destination: "Srisailam Dam",
      image: require('./assets/srisailam.webp'),
      price: 22.99,
      description: "description of city 7",
    },
    {
      id:8,
      destination: "Tirupati",
      image: require('./assets/tirupati.jpg'),
      price: 10.99,
      description: "description of city 8",
    },
    {
      id:9,
      destination: "Ram Mandir",
      image: require('./assets/ayodhya.avif'),
      price: 25.99,
      description: "description of city 9",
    },
    {
      id:10,
      destination: "Ooty",
      image: require('./assets/ooty.jpg'),
      price: 29.99,
      description: "description of city 10",
    },
    {
      id:11,
      destination: "Kodaikanal",
      image: require('./assets/kodaikanal.webp'),
      price: 29.99,
      description: "description of city 11",
    },
    {
      id:12,
      destination: "Nagarjuna sagar Dam",
      image: require('./assets/sagar.jpeg'),
      price: 29.99,
      description: "description of city 12",
    }
];

return (
  <div className="App">
    <h1 className='mt-4 text-center font-bold text-3xl mb-4'> Select Your Destiny </h1>
      <DestinyList places={places} />
    </div>
  );
};

export default App;
