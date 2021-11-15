import logo from './logo.svg';
import './assets/css/styles.scss';
import Slider from './components/Slider/Slider';
import About from './components/About/About';
import Products2 from './components/Products2/Products2';
import Services from './components/Services/Services';
import Formulario from './components/Contact/Formulario';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div>
        <Slider/>
        <About/>
        <Products2/>
        <Services/>
        <Formulario/> 
        <Footer/>
    </div>

  );
}

export default App;
