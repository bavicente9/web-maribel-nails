
import './App.css';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import Services from './Components/Services/Services';




const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Services />    
      <div id='body'>
      </div>

    </div>
  )
}

export default App;
