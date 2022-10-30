import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({selectedParagraph,timeStarted ,timeRemaining ,words ,characters ,wpm ,testInfo , handleUserInput}) => {
    return ( 
        <div className="typing-challenge-container">
            {/** Details Section */}
            <div className="details-container">
            {/** Words Typed*/}
            <ChallengeDetailsCard cardName="Words" cardValue={words}/>

            {/** Characters Typed*/}
            <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>

            {/** Speed*/}
            <ChallengeDetailsCard cardName="Speed" cardValue={wpm}/>
           
            </div>
            {/** The REAL challenge*/}
            <div className="typewriter-cont">
                <TypingChallenge timeRemaining={timeRemaining}
                selectedParagraph={selectedParagraph}
                timeStarted={timeStarted} testInfo={testInfo} 
                handleUserInput={handleUserInput}
                />
            </div>
        </div>
     );
}
 
export default TypingChallengeContainer;