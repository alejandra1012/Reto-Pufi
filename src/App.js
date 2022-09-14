import './App.css';
import NavBar from './Components/NavBar/NavBar';
import EspufApi from './Components/EspufApi/EspufApi';
import Carousel from './Components/Carousel/Carousel';
import PufiPuff from './Components/PufiPuff/PufiPuff';
import PufiRain from './Components/PufiRain/PufiRain';
import PufiCar from './Components/PufiCar/PufiCar';
import PufiNap from './Components/PufiNap/PufiNap';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Carousel />
      <PufiPuff />
      <PufiRain />
      <PufiCar />
      <PufiNap />
      <EspufApi />
    </div>
  );
}

export default App;
