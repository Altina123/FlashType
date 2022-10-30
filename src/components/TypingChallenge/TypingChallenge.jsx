import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './TypingChallenge.css'


const TypingChallenge = ({timeRemaining , timeStarted , testInfo, handleUserInput}) => {
    
    return ( 
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">
                    00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
                </p>
                <p className="timer-info">
                    {!timeStarted && "Start typing to start the Test"}
                </p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                    {/*selectedParagraph */}

                    {testInfo.map((individualLetterInfo , index) =>{
                        return (
                        <TestLetter
                        key={index} 
                        individualLetterInfo={individualLetterInfo}/>
                    )
                        })
                }
                    </div>

                </div>
                <div className="textarea-right">
                    {/**e-event */}
                    <textarea onChange={(e)=> handleUserInput(e.target.value)}
                        
                     className='textarea' 
                    placeholder='Start typing here'>
                    </textarea>

                </div>
            </div>
        </div>
     );
}
 
export default TypingChallenge;