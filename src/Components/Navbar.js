import React from "react";
//importing font awesome from font awesome react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";
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
                        <Link smooth={true} to="Home" to className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav-item">
                        <Link smooth={true} to="About" className="nav-link" href="#">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="Projects" className="nav-link" href="#">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link smooth={true} to="Contact" className="nav-link" href="#">Contact Me</Link>
                    </li>
                
                </ul>
    
            </div>
    </div>

</nav>
    )
}

export default Navbar
