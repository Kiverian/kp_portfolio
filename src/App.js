import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./Components/Navbar"; 
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Element} from "react-scroll"

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

        {/* <Switch> */}
          {/* <Header />
          <AboutMe />
          <Projects />
          <Contact />
          <Footer /> */}
{/*           
          <Route exact path="/" component={Header} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />

        </Switch> */}
        <Element name="header">
        <Header />

        </Element>
        <Element name="about-me">
        <AboutMe />

        </Element>
        <Element name="projects">
        <Projects />

        </Element>
        <Element name="contact">
        <Contact />

        </Element>
          
          <Footer /> 
        
      </>
  );
}

export default App;
