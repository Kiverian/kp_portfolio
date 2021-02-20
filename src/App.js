import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./Components/Navbar"; 
import Header from "./Components/Header";
function App() {
  return (
    <>
    <Particles 
    className = "particles-canvas"
      params= {{
        particles: {
          number: {
            value: 60,
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
    </>
  );
}

export default App;
