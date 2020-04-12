import React, {Component} from 'react';

class Timer extends Component {
    
    constructor() { 
        super();
        this.state = {
            minutes : 5,
            seconds : 0
        }
    }
    componentDidMount() {
        this.timeInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            this.setState(({ seconds }) => ({
            seconds: seconds - 1
            }))
            if(seconds === 0) {
                if(minutes === 0) { 
                    clearInterval(this.timeInterval);
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }
    componentDidUpdate(){
        const{minutes, seconds}= this.state;
        const{timeOver}= this.props;
        if(minutes===0 && seconds===0){
            timeOver();
        }
    }
    
    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }
    render() {
        const { seconds, minutes } = this.state
        return(
            <div id="clockdiv">
                { minutes === 0 && seconds === 0
                    ? <h3 className="timerStyle">Time up!!</h3>
                    : <h3 className="timerStyle">Time Remaining: { minutes }:{ seconds < 10 ? `0${ seconds }` : seconds }</h3>
                }
            </div>
        );
    }
}
export default Timer;