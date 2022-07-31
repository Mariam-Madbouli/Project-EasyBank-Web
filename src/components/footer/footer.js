import React from 'react';
import './footer.css';
import logo2 from '../images/‏‏logo-white.svg';
import face from '../images/icon-facebook.svg';
import tube from '../images/icon-youtube.svg';
import twitt from '../images/icon-twitter.svg';
import pinter from '../images/icon-pinterest.svg';
import insta from '../images/icon-instagram.svg';




function Footer() {
    return (
    <div className="container4">

        <div className= "section4">
            

                <div className="logoIcon">

                    <img className= "logo2" src={logo2} alt="" />

                    <div className="icons">
                        <a href="#"><img className= "icon" src={face} alt="" /> </a>
                        <a href="#"><img className= "icon" src={tube} alt="" /> </a>
                        <a href="#"><img className= "icon" src={twitt} alt="" /> </a>
                        <a href="#"><img className= "icon" src={pinter} alt="" /> </a>
                        <a href="#"><img className= "icon" src={insta} alt="" /> </a>
                        
                        
                        
                        
                    </div>

                </div>
                
                


                <ul className ="ulall">

                    <ul className="ulNav2">
                        <li ><a>About Us</a></li>
                        <li ><a>Contact</a></li>
                        <li ><a>Blog</a></li>
                    </ul>

                    <ul className="ulNav2">
                        <li ><a>Careers</a></li>
                        <li ><a>Support</a></li>
                        <li ><a>Privacy Policy</a></li>
                    </ul>


                </ul>
                

            

            <div className="copyright">
                <button className="btn4">
                    Request Invite
                </button>
                <p className ="copy"> ©Easybank.All Rights Reserved</p>
            </div>



        </div> 
    </div>

    );
}

export default Footer;


        
        
{/* <div class="container">
            <div class="social">
                    <img class="f-logo" src="./images/logo-white.svg" alt="">
                <div class="social-icon">
                    <img src="./images/icon-facebook.svg" alt="">
                    <img src="./images/icon-youtube.svg" alt="">
                    <img src="./images/icon-twitter.svg" alt="">
                    <img src="./images/icon-pinterest.svg" alt="">
                    <img src="./images/icon-instagram.svg" alt="">
                </div>
            </div>
            
                <ul class="ul-1">
                    <ul>
                        <li>about us</li>
                        <li>contact</li>
                        <li>blog</li>
                    </ul>
                    <ul>
                        <li>careers</li>
                        <li>support</li>
                        <li>privacy policy</li>
                    </ul>
                </ul>
                
                <div class="btn">
                    <button>request invite</button>
                    <p class="copy-rigth" >&copy;Easybank.all rigth reserved</p>
                </div>
        </div> */}

