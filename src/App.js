import logo from './logo.svg';
import './assets/css/styles.scss';
import Header from './components/Header/Header';
import About from './components/About/About';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';



function App() {
  return (
    <div>
        <Slider/>
        {/* <Header/> */}
        <About/>
        <Products/>
        <Services/>
        <Contact/> 
        <Footer/>
    </div>

  );
}

export default App;
