import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import './TestContainer.css'

const TestContainer = ({selectedParagraph,timeStarted ,timeRemaining ,words ,characters ,wpm ,testInfo ,handleUserInput , startAgain}) => {

    return ( 
        <div className="test-container">
            {
                timeRemaining > 0 ? (<div data-aos="fade-up" className="typing-challenge-container">
                <TypingChallengeContainer
                 words={words} characters={characters}
                  wpm={wpm} timeRemaining={timeRemaining}
                  timeStarted={timeStarted} selectedParagraph={selectedParagraph}
                  testInfo={testInfo} handleUserInput={handleUserInput}
                  
                  />
            </div>)
             : (<div className="try-again-container">
            <TryAgain words={words} characters={characters} startAgain={startAgain}
            wpm={wpm} 
            />
           </div>

            )}
           
        </div>
     );
}
 
export default TestContainer;