import logo from './logo.svg';
import './assets/css/styles.scss';
import About from './components/About/About';
//import Products from './components/Products/Products';
import Services from './components/Services/Services';
//import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import Products2 from './components/Products2/Products2';
//import SendForm from './components/Contact/SendForm';
import Formulario from './components/Contact/Formulario';




function App() {
  return (
    <div>
        <Slider/>
        <About/>
        <Products2/>
        {/* <Products/> */}
        <Services/>
        {/* <Contact/>  */}
         {/* <SendForm/> */} 
         <Formulario/> 
        <Footer/>
    </div>

  );
}

export default App;
