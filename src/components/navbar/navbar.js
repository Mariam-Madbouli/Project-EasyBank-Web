import React, { useState } from 'react';

import './navbar.css';
import logo from '../images/logo.svg';
import burgar from '../images/icon-hamburger.svg';
import deleteIcon from '../images/icon-close.svg';





function Navbar() {

    const [ulNav, setUlNav] = useState("ulNav hidden");
    const [ burgarIcon, setBurgarIcon ] = useState("burgar");
    const [ iconDeletShow, setIconDeletShow ] = useState("close");
    
    const navToggle = () => {
        if (iconDeletShow === "close" ) {
            setIconDeletShow("close show") ;
            setUlNav("ulNav ") ;
            setBurgarIcon("burgar hidden");

        } else if(iconDeletShow==="close show") {
            setIconDeletShow("close") ;
            setUlNav("ulNav hidden ") ;
            setBurgarIcon("burgar");

        }
    };


    return (
    <div className="nav">
        <header className="App-header">
            
            <img className= "logo" src={logo} alt="" />

        

            <nav className="navbar">
                <ul className={ulNav}>
                    <li className="Itemli"><a className="link">Home</a></li>
                    <li className="Itemli"><a className="link">About</a></li>
                    <li className="Itemli"><a className="link">Contact</a></li>
                    <li className="Itemli"><a className="link">Blog</a></li>
                    <li className="Itemli"><a className="link">Careers</a></li>
                </ul>



            </nav>

            <div className="button">
                <button className="btn">
                    Request Invite
            </button>

            <img className= {iconDeletShow} src={deleteIcon} alt="" onClick={navToggle}  />
            <img className= {burgarIcon} src={burgar} alt="" onClick={navToggle}/>



            </div>
            
        </header>
    </div>
    );
}

export default Navbar;