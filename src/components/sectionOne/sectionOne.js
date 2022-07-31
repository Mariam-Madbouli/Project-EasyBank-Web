import React from 'react';
import './sectionOne.css';
import phone from '../images/image-mockups.png';
import background from '../images/bg-intro-desktop.svg';



function SectionOne() {
    return (


<div className="main">
    <div className="container">
        <div className="sectionhero">
            
            <div className="photosR">
                <img className="image" src= {phone} alt="" />
                
            </div>

            <div className="textsL">
                <h1>Next generation <br></br> digital banking  </h1>
                <p>Takeyu financial life online.Your Easybank accont <br></br>
                    will be a one-stop-shop for spending, seving,<br></br>
                    budgeting, investing, and much more.
                </p>


                <button className="btn2">
                    Request Invite
                </button>

            </div>

        </div>
        


        
        
    </div>

</div>    
    
    );
}

export default SectionOne;

