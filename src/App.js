
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './views/Home'
import ContactPage from './views/ContactPage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';




const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} >

        </Route>
          <Route path='#services' element={<Home />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  )

}

export default App;
