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
    const content = (
    <>
    <img className= "portfolio-image-popupbox"src={ecom} alt="ecom project" />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/ecommerce-2")}>https://github.com/Kiverian/ecommerce-2</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigEcom = {
    titleBar:{
        enable:true,
        text: "Semantic HTML Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}

//FRIENDS
const openPopupboxFriendsApp = () =>{
    const content = (
    <>
    <img className= "portfolio-image-popupbox"src={friends} alt="friends project" />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/friendsApp")}>https://github.com/Kiverian/friendsApp</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigFriendsApp = {
    titleBar:{
        enable:true,
        text: "Friends App"
    },
    fadeIn: true,
    fadeInSpeed: 500

}


    //GATEWAY
    const openPopupboxGateway = () =>{
        const content = (
        <>
        <img className= "portfolio-image-popupbox"src={gateway} alt="gateway project" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <b>Codepen:</b> <a className="hyper-link" onClick={() => window.open("https://codepen.io/Kiverian/project/editor/AeEnaM")}>https://codepen.io/Kiverian/project/editor/AeEnaM</a>
    
        </>
        )
        PopupboxManager.open({content})
    }
    
    
    const popupboxConfigGateway = {
        titleBar:{
            enable:true,
            text: "Gateway Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    
    }

    //Reservation
const openPopupboxReservation = () =>{
    const content = (
    <>
    <img className= "portfolio-image-popupbox"src={reservation} alt="ecom project" />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/Reservation-app")}>https://github.com/Kiverian/Reservation-app</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigReservation = {
    titleBar:{
        enable:true,
        text: "Reservation Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}

    //Speech
    const openPopupboxSpeech = () =>{
        const content = (
        <>
        <img className= "portfolio-image-popupbox"src={speech} alt="Speech recogniton project" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/speechRecognition-app")}>https://github.com/Kiverian/speechRecognition-app</a>
    
        </>
        )
        PopupboxManager.open({content})
    }
    
    
    const popupboxConfigSpeech = {
        titleBar:{
            enable:true,
            text: "Speech Recogniton Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
        
    
    }

    //TICTACTOE
const openPopupboxTictactoe = () =>{
    const content = (
    <>
    <img className= "portfolio-image-popupbox"src={tictactoe} alt="Tictactoe project" />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/tic-tac-toe-app")}>https://github.com/Kiverian/tic-tac-toe-app</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigTictactoe = {
    titleBar:{
        enable:true,
        text: "Tictactoe Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}
    
//TODO
const openPopupboxTodo = () =>{
    const content = (
    <>
    <img className= "portfolio-image-popupbox"src={todo} alt="Todo project" />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/todoAPI")}>https://github.com/Kiverian/todoAPjuI</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigTodo = {
    titleBar:{
        enable:true,
        text: "To-do Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}


//ANIMATED
const openPopupboxAnimated = () =>{
    const content = (
    <>
    <img className= "portfolio-image-popupbox"src={animated} alt="Animated Nav Bar project" />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/animatedNavBar")}>https://github.com/Kiverian/animatedNavBar</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigAnimated = {
    titleBar:{
        enable:true,
        text: "Animated Nav Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}


//QUARANTIPS
const openPopupboxQuarantips = () =>{
    const content = (
    <>
    <img className= "portfolio-image-popupbox"src={quarantips} alt="Quarantips project" />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/quarantips")}>https://github.com/Kiverian/quarantips</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigQuarantips = {
    titleBar:{
        enable:true,
        text: "Quarantips Project"
    },
    fadeIn: true,
    fadeInSpeed: 500

}

//Burger
const openPopupboxBurger = () =>{
    const content = (
    <>
    <img className= "portfolio-image-popupbox"src={burger} alt="Burger project" />
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Kiverian/burger-app")}>https://github.com/Kiverian/burger-app</a>

    </>
    )
    PopupboxManager.open({content})
}


const popupboxConfigBurger = {
    titleBar:{
        enable:true,
        text: "Burger Project"
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
