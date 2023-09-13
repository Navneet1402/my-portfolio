import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './comonents/Header';
import Home from './comonents/home/Home';
import About from './comonents/home/about/About';
import Skills from './comonents/skills/Skills';
import Services from './comonents/services/Services';
import Qualification from './comonents/Qualifications/Qualification';


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

    </main>
    </>
  
  );
}

export default App;
