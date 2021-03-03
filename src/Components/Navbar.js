import React from "react";
//importing font awesome from font awesome react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";
const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">

    <div className ="container">
            <Link className="navbar-brand" to=""></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                
                {/* imported the font awesome burger icon for the responisve design and added white color */}

                <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link smooth={true} spy={true} to="header" className="nav-a">Home <span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav-item">
                        <Link smooth={true} spy={true} to="about-me" className="nav-a">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} spy={true} to="projects" className="nav-a">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} spy={true} to="contact" className="nav-a">Contact Me</Link>
                    </li>
                
                </ul>
    
            </div>
    </div>

</nav>
    )
}

export default Navbar
