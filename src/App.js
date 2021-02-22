import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./Components/Navbar"; 
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
    <Particles 
    className = "particles-canvas"
      params= {{
        particles: {
          number: {
            value: 65,
            density: {
              enable: true, 
              volume_area: 900
            }
          },
          shape: {
            type: "star",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }}
    />
    <Navbar />
    <Header />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
