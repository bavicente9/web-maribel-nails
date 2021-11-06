
import './App.css';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';




const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Services />
      <Contact />

      <div id = 'footer' style = { {display:'inline-block', width : '100%' , height : '275px', background :'pink' }}>
        <h1>Footer</h1>
      </div>
    </div>
  )
}

export default App;
