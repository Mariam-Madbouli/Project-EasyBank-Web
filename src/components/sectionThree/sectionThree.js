import React from 'react';
import './sectionThree.css';
import dollar from '../images/image-currency.jpg';
import food from '../images/image-restaurant.jpg';
import plane from '../images/image-plane.jpg';
import beta from '../images/image-confetti.jpg';




function SectionThree() {
    return (
    <div className="container3">
        <div className= "section3">

            <div className= "content3">
                <h1 className="h1">Latest Articles</h1>
            </div>
            

            <div className="articles" >

                <div className ="articl">
                    <img className= "image3" src={dollar} alt=""></img>
                    <div className= "cardContent">
                        <p className="person">By Claire Robinon</p>
                        <h3>Receive money in any
                            currency with no fees
                        </h3>
                        <p className="par3"> The world is getting smaller and we're
                        becoming more mobile. So why should you be
                        comingforced to only receive money in a single ...
                        </p>
                    </div>
                    
                </div>

                <div className ="articl">
                    <img className= "image3" src={food} alt=""></img>
                    <div className= "cardContent">
                        <p className="person">By Wilson Hutton</p>
                        <h3>Treat yourself without
                            worring about money
                        </h3>
                        <p className="par3">Our simple budgeting feature allows you to
                        separate out your spending and set realistic
                        limits each month. That means you ...
                        </p>
                    </div>
                    
                </div>

                <div className ="articl">
                    <img className= "image3" src={plane} alt=""></img>
                    <div className= "cardContent">
                        <p className="person">By Wilson Hutton</p>
                        <h3>Take your Easybank card
                            wherever you go
                        </h3>
                        <p className="par3">We want you to enjoy your travels. This is
                        why we don't charge any fees on purchases
                        while you're aboard. We'll even show you ...
                        </p>

                    </div>
                    
                </div>

                <div className ="articl">
                    <img className= "image3" src={beta} alt=""></img>
                    <div className= "cardContent">
                        <p className="person">By Claire Robinon</p>
                        <h3>Our invite-only betaaccounts are now live!</h3>
                        <p className="par3"> After alot of hard work by the whole team,
                        we're excited to launch our closed beta. It's 
                        easy to request an invite throught the site ...
                        </p>
                    </div>
                    
                </div>
            </div>

        </div>
        
        


        
        
    </div>
    );
}

export default SectionThree;

