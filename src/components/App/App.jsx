import React from 'react'
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import {SAMPLE_PARAGRAPHS} from './../../data/sampleParagraphs';
import './App.css'

const totalTime = 60;
const apiUrl="http://metaphorpsum.com/paragraphs/1/9";
const defaultState = {
    selectedParagraph : "",
    timeStarted : false ,
    timeRemaining : totalTime ,
    words : 0,
    characters :0,
    wpm : 0,
    testInfo : []
}

class App extends React.Component{
    state = defaultState;

    fetchNewParagraphFallback = () => {
        const data =
            SAMPLE_PARAGRAPHS[
                Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
            ];

        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });

        // Update the testInfo in state
        this.setState({
            ...defaultState,
            selectedParagraph: data,
            testInfo,
        });
    };

    fetchNewParagraph = () => {
        fetch(apiUrl).then(response=>response.text()).then(data=>{
        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map(selectedLetter=>{return{
            testLetter : selectedLetter,
            status : "notAttempted "}

        })
        this.setState({...defaultState, testInfo:testInfo , selectedParagraph : data})
     })
    }

    componentDidMount(){
       this.fetchNewParagraph();
    }

    startTimer = ()=> {
        this.setState({timeStarted: true});
        const timer = setInterval(()=>{
            if(this.state.timeRemaining > 0){
                //ndryshimi i wpm
                const timeSpent = totalTime - this.state.timeRemaining;
                const wpm = timeSpent > 0 ?
                 (this.state.words/timeSpent) * totalTime:0;

                this.setState({
                    timeRemaining: this.state.timeRemaining-1,
                    wpm : parseInt(wpm),
                })
            } else { clearInterval(timer);}
            // nese eshte = 60s 
        },1000);
    }

    startAgain = () =>{ this.fetchNewParagraphFallback();}

    handleUserInput = (inputValue) =>{
       // console.log(inputValue);
       if(!this.state.timeStarted) this.startTimer();

       // Algoritmi 

       const characters = inputValue.length;
       const words = inputValue.split(" ").length;
       const index = characters - 1;

       //underflow
       if (index < 0) {
        this.setState({
            testInfo: [
                {
                    testLetter: this.state.testInfo[0].testLetter,
                    status: "notAttempted",
                },
                ...this.state.testInfo.slice(1),
            ],
            characters,
            words,
        });

        return;
    }

       //overflow

       if (index >= this.state.selectedParagraph.length) {
        this.setState({
            characters,
            words,
        });
        return;
    }

       //handle the backspace
       //make a copy of testInfo

       const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedParagraph.length - 1))
            testInfo[index + 1].status = "notAttempted";

        //check for the correct typed letter
        const isCorrect = inputValue[index]===testInfo[index].testLetter;

        //update the testInfor
        testInfo[index].status = isCorrect ? "correct" : "incorrect";

        // update the state
        this.setState({
            testInfo,
            words,
            characters,
        });
    };

    render(){
        
        return(
            <div className='app'>
                {/*Nav section*/}
                <Nav />

                {/*Landing Page */}
                <Landing />

                {/*CHallange Section */}
                <ChallengeSection
                 selectedParagraph={this.state.selectedParagraph}
                 words={this.state.words}
                 characters={this.state.characters}
                 wpm={this.state.wpm}
                 timeRemaining={this.state.timeRemaining}
                 timeStarted={this.state.timeStarted}
                 testInfo={this.state.testInfo}
                 handleUserInput={this.handleUserInput}
                 startAgain={this.startAgain}
                />

                {/*Footer */}
                <Footer/>

            </div>
        )
    }
}

export default App;