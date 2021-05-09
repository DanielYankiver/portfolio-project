import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Links from './components/Links';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Filmmaker from './components/Filmmaker';
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
      <Particles
        className="particles-space" 
        params={{
          particles: {
            number: {
              value: 600,
              density: {
                enable: true,
                value_area: 789.1476416322727
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
              value: 0.48927153781200905,
              random: false,
              anim: {
                enable: false, 
                speed: 0.2, 
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 2, 
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false
              }
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
              speed: 0.2,
              direction: "none", 
              random: true, 
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
      <Links />
      {/* <Experience /> */}
      <Portfolio />
      <Filmmaker />
      <Skills />
      <Particles 
        className="particles-bubbles"
        params={{
          particles: {
              number: {
                  value: 200,
                  density: {
                      enable: false
                  }
              },
              size: {
                  value: 3,
                  random: true,
                  anim: {
                      speed: 4,
                      size_min: 0.3
                  }
              },
              line_linked: {
                  enable: false
              },
              move: {
                  random: true,
                  speed: 1,
                  direction: "top",
                  out_mode: "out"
              }
          },
          // interactivity: {
          //     events: {
          //         onhover: {
          //             enable: true,
          //             mode: "bubble"
          //         },
          //         onclick: {
          //             enable: true,
          //             mode: "repulse"
          //         }
          //     },
          //     modes: {
          //         bubble: {
          //             distance: 250,
          //             duration: 2,
          //             size: 0,
          //             opacity: 0
          //         },
          //         repulse: {
          //             distance: 400,
          //             duration: 4
          //         }
          //     }
          // }
      }} 
      />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

// PARTICLES POLYGON MASK 

{/* <Particles
params={{
  fps_limit: 28,
  particles: {
      collisions: {
          enable: false
      },
      number: {
          value: 200,
          density: {
              enable: false
          }
      },
      line_linked: {
          enable: true,
          distance: 30,
          opacity: 0.4
      },
      move: {
          speed: 1
      },
      opacity: {
          anim: {
              enable: true,
              opacity_min: 0.05,
              speed: 1,
              sync: false
          },
          value: 0.4
      }
  },
  polygon: {
      enable: true,
      scale: 0.5,
      type: "inline",
      move: {
          radius: 10
      },
      url: "/small-deer.2a0425af.svg",
      inline: {
          arrangement: "equidistant"
      },
      draw: {
          enable: true,
          stroke: {
              color: "rgba(255, 255, 255, .2)"
          }
      }
  },
  retina_detect: false,
  interactivity: {
      events: {
          onhover: {
              enable: true,
              mode: "bubble"
          }
      },
      modes: {
          bubble: {
              size: 6,
              distance: 40
          }
      }
  }
}} /> */}