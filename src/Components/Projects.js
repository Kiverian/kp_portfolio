import React from "react";
import ecom from "../ecom-pic.png";
import friends from "../friendsapp-pic.png";
import gateway from "../gateway-pic.png";
import reservation from "../reservaton-pic.png";
import speech from "../speechRecognition-pic.png";
import tictactoe from "../tic-tac-toe-pic.png";
import todo from "../todo-pic.png";
import animated from "../animatedNavBar-pic.png";
import quarantips from "../quarantips-pic.png";
import burger from "../burger-app-pic.png";
//FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
 import {PopupboxManager, PopupboxContainer} from "react-popupbox";
 import "react-popupbox/dist/react-popupbox.css";



const Projects = () => {

//ECOM
const openPopupboxEcom = () =>{
    let content = (
    <>
    <p>Ecom</p>
    <img className= "portfolio-image-popupbox"src={ecom} alt="ecom project" />
    <p>My first e-commerce website using semantic HTML and CSS. After a couple of iterations eventually, there has been a JSON file added along with transferring it to React.js.</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/ecommerce-2")}>https://github.com/Kiverian/ecommerce-2</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigEcom = {
    titleBar:{
        enable:true,
        // text: "Semantic HTML Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}

//FRIENDS
const openPopupboxFriendsApp = () =>{
    let content = (
    <>
    <p>Friends App</p>
    <img className= "portfolio-image-popupbox"src={friends} alt="friends project" />
    <p>A social media app made from React.js that gives you the ability to add friends, (similar to fb).</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/friendsApp")}>https://github.com/Kiverian/friendsApp</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigFriendsApp = {
    titleBar:{
        enable:true,
        // text: "Friends App"
    },
    fadeIn: true,
    fadeInSpeed: 500

}


    //GATEWAY
    const openPopupboxGateway = () =>{
        let content = (
        <>
        <p>Gateway project</p>
        <img className= "portfolio-image-popupbox"src={gateway} alt="gateway project" />
        <p>My FIRST ever experience creating a project. I got the chance to dive into HTML and CSS. </p>
        <b>Codepen:</b> <a className="hyper-link" onClick={() => window.open("https://codepen.io/Kiverian/project/editor/AeEnaM")}>https://codepen.io/Kiverian/project/editor/AeEnaM</a>
    
        </>
        )
        PopupboxManager.open({content})
    }
    
    
    const popupboxConfigGateway = {
        titleBar:{
            enable:true,
            // text: "Gateway Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    
    }

    //Reservation
const openPopupboxReservation = () =>{
    let content = (
    <>
    <p>Reservation app</p>
    
    <img className= "portfolio-image-popupbox"src={reservation} alt="ecom project" />
    <p>Making reservations just got easier and looks great while you make them!</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/Reservation-app")}>https://github.com/Kiverian/Reservation-app</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigReservation = {
    titleBar:{
        enable:true,
        // text: "Reservation Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}

    //Speech
    const openPopupboxSpeech = () =>{
        let content = (
        <>
        <p>Speech recognition app</p>
        <img className= "portfolio-image-popupbox"src={speech} alt="Speech recogniton project" />
        <p>Guess a number! With this project I got JavaScript to listen to someone guessing a number on the computer with audio.</p>
        <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/speechRecognition-app")}>https://github.com/Kiverian/speechRecognition-app</a>
    
        </>
        )
        PopupboxManager.open({content})
    }
    
    
    const popupboxConfigSpeech = {
        titleBar:{
            enable:true,
            // text: "Speech Recogniton Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
        
    
    }

    //TICTACTOE
const openPopupboxTictactoe = () =>{
    let content = (
    <>
    <p>Tic-tac-toe-app</p>
    <img className= "portfolio-image-popupbox"src={tictactoe} alt="Tictactoe project" />
    <p>Everyone knows the game of tic-tac-toe, you can play the game here in this React app.</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/tic-tac-toe-app")}>https://github.com/Kiverian/tic-tac-toe-app</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigTictactoe = {
    titleBar:{
        enable:true,
        // text: "Tictactoe Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}
    
//TODO
const openPopupboxTodo = () =>{
    let content = (
    <>
    <p>To-do-app</p>
    <img className= "portfolio-image-popupbox"src={todo} alt="Todo project" />
    <p>Being organized is so essential to success in my opinon. Create your own to-do list to keep up with your daily tasks.</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/todoAPI")}>https://github.com/Kiverian/todoAPjuI</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigTodo = {
    titleBar:{
        enable:true,
        // text: "To-do Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}


//ANIMATED
const openPopupboxAnimated = () =>{
    let content = (
    <>
    <p>Animated Nav Bar</p>
    <img className= "portfolio-image-popupbox"src={animated} alt="Animated Nav Bar project" />
    <p>Look at the feautures of this animated nav bar.</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/animatedNavBar")}>https://github.com/Kiverian/animatedNavBar</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigAnimated = {
    titleBar:{
        enable:true,
        // text: "Animated Nav Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}


//QUARANTIPS
const openPopupboxQuarantips = () =>{
   let content = (
    <>
    <p>Quarantips</p>
    <img className= "portfolio-image-popupbox"src={quarantips} alt="Quarantips project" />
    <p>A group project for implementing third party API's. One of my personal favorite projects because of the image map.</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/quarantips")}>https://github.com/Kiverian/quarantips</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigQuarantips = {
    titleBar:{
        enable:true,
        // text: "Quarantips Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}

//Burger
const openPopupboxBurger = () =>{
    let content = (
    <>
    <p>Burger App</p>
    <img className= "portfolio-image-popupbox"src={burger} alt="Burger project" />
    <p>Ordering your burger has never been so simple.</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/burger-app")}>https://github.com/Kiverian/burger-app</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigBurger = {
    titleBar:{
        enable:true,
        // text: "Burger Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}




    return (
        <div id="Projects" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>

                


                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxEcom}>
                    <img className="portfolio-image" src={ecom} alt="ecom project" />

                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />
                </div>

                <div className="portfolio-image-box" onClick={openPopupboxFriendsApp}>
                    <img className="portfolio-image" src={friends} alt="friends project" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />

                </div>

                <div className="portfolio-image-box" onClick={openPopupboxGateway}>
                    <img className="portfolio-image" src={gateway} alt="gateway project" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />

                </div>

                <div className="portfolio-image-box" onClick={openPopupboxReservation}>
                    <img className="portfolio-image" src={reservation} alt="reservation project" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />

                </div>

                <div className="portfolio-image-box" onClick={openPopupboxSpeech}>
                    <img className="portfolio-image" src={speech} alt="speech project" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />

                </div>

                <div className="portfolio-image-box" onClick={openPopupboxTictactoe}>
                    <img className="portfolio-image" src={tictactoe} alt="tictactoe project" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />

                </div>

                <div className="portfolio-image-box" onClick={openPopupboxTodo}>
                    <img className="portfolio-image" src={todo} alt="todo project" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />

                </div>

                <div className="portfolio-image-box" onClick={openPopupboxAnimated}>
                    <img className="portfolio-image" src={animated} alt="animated project" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />

                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxQuarantips}>
                    <img className="portfolio-image" src={quarantips} alt="quarantips project" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />

                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxBurger}>
                    <img className="portfolio-image" src={burger} alt="burger project" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon = {faSearchPlus} />

                    </div>

                    
                </div>

            </div>
            <PopupboxContainer {...popupboxConfigEcom} />
            <PopupboxContainer {...popupboxConfigFriendsApp } />
            <PopupboxContainer {...popupboxConfigGateway } />
            <PopupboxContainer {...popupboxConfigReservation } />
            <PopupboxContainer {...popupboxConfigSpeech } />
            <PopupboxContainer {...popupboxConfigTictactoe } />
            <PopupboxContainer {...popupboxConfigTodo } />
            <PopupboxContainer {...popupboxConfigAnimated } />
            <PopupboxContainer {...popupboxConfigQuarantips } />
            <PopupboxContainer {...popupboxConfigBurger } />
           
            
        </div>
    )
}

export default Projects
