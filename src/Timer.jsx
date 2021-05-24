import React from "react"

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            showDate: new Date().toLocaleDateString(),
            isToggleOn: false
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    callMe() {
        setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    clickHandler() {
        this.setState(state => ({
            isToggleOn:!state.isToggleOn 
        }))
    }

    render() {
        return (
            <div>
                <h1>It is {this.state.date.toLocaleTimeString()}</h1>
                <h1>{this.state.showDate}</h1>
                
                <button onClick={this.clickHandler}>{this.state.isToggleOn ? <div>STOP</div>  : <div>START {this.callMe()}</div>}</button>



            </div>
        );
    }
}




export default Timer;
