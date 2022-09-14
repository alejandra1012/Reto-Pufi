import './App.css';
import NavBar from './Components/NavBar/NavBar';
import EspufApi from './Components/EspufApi/EspufApi';
import Carousel from './Components/Carousel/Carousel';
import PufiPuff from './Components/PufiPuff/PufiPuff';
import PufiCar from './Components/PufiCar/PufiCar';
import PufiNap from './Components/PufiNap/PufiNap';
import PufiRain from './Components/PufiRain/PufiRain';
import Collage from './Components/Collage/Collage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Carousel />
      <PufiPuff />
      <PufiRain />
      <PufiCar />
      <PufiNap />
      <Collage />
      <EspufApi />
      <Footer />
    </div>
  );
}

export default App;
