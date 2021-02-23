import React from "react";
import Author from "../KpImg.jpg";

const AboutMe = () => {
    return (
        <div id="About" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap">
                    <img className="profile-img" src={Author} alt="Author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading mb">About me </h1>
                    <p>
                    From the beautiful sunshine state of Florida, where most call me KP, I am a flourishing software engineer who
                     enjoys a great number of things that keeps my mind running day in and day out. I’ve been extremely fortunate
                      to gain great experiences in a variety of things, in fact some people refer to me as well rounded.
                       I welcome you to check out some of my projects to see some of the things I have been working hard to
                        create over the last 6 months. Check back later for my blog that is currently under construction
                         and please enjoy your exploration of the site.

                    </p>

                    {/* <button className="resume">Resume</button> */}
                    <a href = "https://docs.google.com/document/d/1PwRTTZ7fTPhpmTxKrW5qFcrEHCDyFJll/edit" target="_blank">
                        <button className="resume">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
