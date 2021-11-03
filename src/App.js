
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
      <div id='contactInfo'>
        <h1> CONTACTO</h1>
        <div id='contact' style={{ border: 'solid 1px F58ED6#', width: '600px', height: '500px', display: 'inline-block', background: 'green' }}>
          <h2>Contacto</h2>
        </div>
        <div id='map' style={{ border: 'solid 1px F58ED6#', width: '600px', height: '500px', display: 'inline-block', background: 'pink' }}>
          <h2>Ubicación</h2>
        </div>
      </div>

      <div id = 'footer' style = {{width : '100%' , height : '275px', background :'pink' }}>
        <h1>Footer</h1>
      </div>
    </div>
  )
}

export default App;
