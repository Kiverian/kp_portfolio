import React from "react";
//imoorting type component 
import Typed from "react-typed";

function Header() {
    return (
      <div className="header-wrapper">
          <div className="main-info">
              <h1>My interests: </h1>
              <Typed 
              
              className="typed-text"
              strings={["Software Engineering", "Web Development", "Finance", "Real Estate", "Reading", "Ol' School"]}
              typeSpeed={40}
              backspeed={60}
              loop/>

              <a href ="#" className ="btn-main-offer" >contact me</a>
          </div>

      </div>
    )
}

export default Header
