import React from "react";
import {
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    FacebookIcon, 
    FacebookShareButton
} from "react-share";

const Footer = () => {
    return (
        <div id="footer" className = "footer">
            <div className = "container">
                <div className = "col-lg-4 col md-6 col-sm-6">
                    <div className= "d-flex">
                        <p>Kiverian Pinkard</p>
                    </div>
                    <div className= "d-flex">
                        <a href="tel: 555-555-5555"> +1(800)555-5555</a>
                    </div>
                    <div className= "d-flex">
                        <p>kiverianpinkard@gmail.com</p>
                    </div>
                </div>

                <div className ="col-lg-3 col-md-2 col sm-6">
                    <div className="row">
                        <div className="col">
                            <a className="footer-nav">Home</a>
                            <br />
                            <a className="footer-nav">About </a>
                            <br />
                            <a className="footer-nav">Projects</a>
                            <br />
                            <a className="footer-nav">Contact </a>
                        </div>
                        {/* <div className="col">
                            <a className="footer-nav">Home</a>
                            <br />
                            <a className="footer-nav">About Me</a>
                            <br />
                            <a className="footer-nav">Projects</a>
                            <br />
                            <a className="footer-nav">Contact </a>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                    <div className="d-flex justify-content-center">
                        <FacebookShareButton 
                        url="https://www.facebook.com/" 
                        >
                            <FacebookIcon className ="mx-3" size={36}/>
                        </FacebookShareButton>

                        <TwitterShareButton
                        url="https://twitter.com/">
                            
                            <TwitterIcon className="mx-3" size={36} />
                        </TwitterShareButton>

                        <LinkedinShareButton
                        url="https://www.linkedin.com/">
                            
                            <LinkedinIcon className="mx-3" size={36} />
                        </LinkedinShareButton>
                    </div>

                    <p className="pt-3 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp; KP | All Rights Reserved
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
