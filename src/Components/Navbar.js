import React from "react";
//importing font awesome from font awesome react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {a} from "react-scroll";
const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">

    <div className ="container">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                
                {/* imported the font awesome burger icon for the responisve design and added white color */}

                <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a smooth={true} to="Home" to className="nav-a" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item">
                        <a smooth={true} to="About" className="nav-a" href="#">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a smooth={true} to="Projects" className="nav-a" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a smooth={true} to="Contact" className="nav-a" href="#">Contact Me</a>
                    </li>
                
                </ul>
    
            </div>
    </div>

</nav>
    )
}

export default Navbar
