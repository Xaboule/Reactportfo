
import './App.css';
import React, { useState } from 'react';
import { NavBar } from './Components/NavBar';
import {Banner} from './Components/Banner'
import {Skills} from './Components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import  Face  from './Components/Face';



function App() {
  const [loaded, setLoaded] = useState(false)

  
  return (
  <div className='main'>
    <div className={loaded === true ? 'loadingScreen-hidden' : 'loadingScreen'}>
    <h1>OUUUUUUUI</h1>
    <button onClick={() => setLoaded(!loaded)}> ENTER</button>
  </div>
    <div className={loaded === true ? "App" : "App-hidden"}>
  
    <NavBar/>
    <div className='banner-face'>
    <Face/>
    <Banner/>

    </div>
    <div className='else'>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
</div>
    </div>
    </div>
  );
}

export default App;
