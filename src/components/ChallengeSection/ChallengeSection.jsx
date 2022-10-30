import React from 'react';
import TestContainer from '../TestContainer/TestContainer';
import './ChallengeSection.css'


const ChallengeSection = ({selectedParagraph,timeStarted ,timeRemaining ,words ,characters ,wpm ,testInfo ,handleUserInput ,startAgain }) => {
    
    return ( 
        <div className="challange-section-container">
            <h1 data-aos="fade-down" 
            className='challange-section-header'>
                Take a speed test now!
            </h1>
            <TestContainer words={words} characters={characters}
             wpm={wpm} timeRemaining={timeRemaining} 
             timeStarted={timeStarted} selectedParagraph={selectedParagraph}
             testInfo={testInfo} handleUserInput={handleUserInput}
             startAgain={startAgain}
            />
        </div>
     );
}
 
export default ChallengeSection;