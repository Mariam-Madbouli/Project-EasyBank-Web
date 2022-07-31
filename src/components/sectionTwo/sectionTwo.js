import React from 'react';
import './sectionTwo.css';
import online from '../images/icon-online.svg';
import budg from '../images/icon-budgeting.svg';
import onboard from '../images/icon-onboarding.svg';
import api from '../images/icon-api.svg';




function SectionTwo() {
    return (
    <div className="container2">
        <div className= "section2">

            <div className= "content2">
                <h1 className="h1">Why choose Easybank?</h1>
                <p>We leverage Open Banking to turn your bank account into your financial hub.<br></br>
                Control your finances like never before.
                </p>


            </div>
            

            <div className="services" >

                <div className ="serv">
                    <img className= "image2" src={online} alt=""></img>
                    <h3>Online Banking</h3>
                    <p className="par">Our modern web and mobile
                        application allow you to keep 
                        track of your finances wherever youare in the world
                    </p>
                </div>

                <div className ="serv">
                    <img className= "image2" src={budg} alt=""></img>
                    <h3>Simple Budgeting</h3>
                    <p className="par">Our modern web and mobile
                        See exactly where your money
                        goes each month. Receive
                        notifications when you're close tohitting your limits.
                    </p>
                </div>

                <div className ="serv">
                    <img className= "image2" src={onboard} alt=""></img>
                    <h3>Fast Onboarding</h3>
                    <p className="par">Our modern web and mobile
                        We don't do branches. Open your
                        account in minutes online and start
                        taking contrl of your finances
                        right away. 
                    </p>
                </div>

                <div className ="serv">
                    <img className= "image2" src={api} alt=""></img>
                    <h3>Open API</h3>
                    <p className="par">Our modern web and mobile
                        Manage your savings, investments,
                        pension, and much more from one
                        account. Tracking your money has \never been easier.
                    </p>
                </div>
            </div>

        </div>
        
        


        
        
    </div>
    );
}

export default SectionTwo;

