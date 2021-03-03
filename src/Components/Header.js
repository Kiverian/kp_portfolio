import React from "react";
//imoorting type component 
import Typed from "react-typed";
import {Element} from "react-scroll";
import {Link} from "react-scroll";



function Header() {
    return (
      <div id="Home"className="header-wrapper">
          <div className="main-info">
              <h1>My interests: </h1>
              <Typed 
              
              className="typed-text"
              strings={["Software Engineering", "Web Development", "Finance", "Real Estate", "Reading", "Ol' School"]}
              typeSpeed={40}
              backspeed={60}
              loop/>

            
                {/* <a href ="#" className ="btn-main-offer" >contact me</a> */}
                {/* <Link smooth={true} spy={true} to="button" className="btn-main-offer">Contact Me</Link> */}
              
          </div>

      </div>
    )
}

export default Header
