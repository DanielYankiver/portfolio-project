import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Links from './components/Links';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <Particles
        className="particles-canvas" 
        params={{
          particles: {
            number: {
              value: 300,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#B3B3B3"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false, 
                speed: 1, 
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3, 
              random: true,
              anim: false,
              speed: 40, 
              size_min: 0.1,
              syno: false
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true, 
              speed: 2,
              direction: "bottom", 
              random: false, 
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Links />
      {/* <Experience /> */}
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
