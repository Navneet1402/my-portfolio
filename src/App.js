import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './comonents/Header';
import Home from './comonents/home/Home';
import About from './comonents/home/about/About';
import Skills from './comonents/skills/Skills';
import Services from './comonents/services/Services';
import Qualification from './comonents/Qualifications/Qualification';
import Contact from './comonents/Contact/Contact';
import Footer from './comonents/Footer/Footer';
import Scrollup from './comonents/Scrollup/Scrollup';

function App() {
  return (
    <>
    <Header/>
    <main className='main '>
      <Home />
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Contact/>
      <Footer/>
      <Scrollup/>

    </main>
    </>
  
  );
}


export default App;
