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

function App() {
  return (
    <>
      <Particles
        className="particles-canvas" 
        params={{
          particles: {
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#B3B3B3"
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
