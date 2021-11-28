import logo from './logo.svg';
import './assets/css/styles.scss';
import Header from './components/Header/Header';
import About from './components/About/About';
import Products2 from './components/Products2/Products2';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div>
        <Header/>
        <About/>
        <Products2/>
        <Services/>
        <Contact/>
        {/* <Formulario/> */} 
        <Footer/>
    </div>

  );
}

export default App;
