import Bg from './Components/Bg';
import Header from './Components/Shared/Header/Header';
import image from "./assets/img/hero-diagonal-img-1.jpg"
import Hero from './Components/Hero';
import Hero2 from './Components/Hero2';
import CompactSection from './Components/CompactSection';
import Abstract from './Components/Abstract';
import Geometry from './Components/Geometry';
import BeSmarter from './Components/BeSmarter';

function App() {
  return (
    <div>
      <Header></Header>
      <Bg />
      <Hero2></Hero2>
      <CompactSection></CompactSection>
      <Abstract></Abstract>
      <Geometry></Geometry>
      <BeSmarter></BeSmarter>
    </div>
  );
}

export default App;
