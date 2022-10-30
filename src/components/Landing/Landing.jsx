import React from 'react';
import './Landing.css';
import flash from './../../Assets/hero.png'
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return ( 
        <div className="landing-container">
            <div  data-aos="fade-right" className="landing-left">
               <h1 className="landing-header">Can you type ...</h1>
               <div className="typerwriter-container">

               <Typewriter
               options={{
               strings: ['Fast?', 'Correct?','Quick?'],
               autoStart: true,
               loop: true,
               }}
/>  
               </div>
            </div>
            <div className="landing-right">
            <img data-aos="fade-left"
            src={flash} alt='hero' className='flash-image'></img>
            </div>
        </div>
     );
}
 
export default Landing;