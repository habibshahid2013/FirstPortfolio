import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import shape from '@material-ui/core/styles/shape';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Services from './components/Services'
import ContactMe from './components/ContactMe'


function App() {
  return (
    <div className="App">
    <>
     <Particles
      className="particles-canvas"
      params={{
        particles:{
          number:{
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6, 
              color: "#f9ab00"
            }

          }
        }
      }}
     />
     <Navbar/>
     <Header/>
     <AboutMe/>

     <Experience/>
      <Services/>
     <Portfolio/>
     <ContactMe/>

     <Footer/>
     </>
    </div>
  );
}

export default App;
