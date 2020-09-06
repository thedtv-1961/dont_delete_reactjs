import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            second: 0,
            isOn: true,
        }
    }

    handleOnClickButton() {
        this.setState((preState, props) => ({
            isOn: !preState.isOn,
        }));
    }

    componentDidMount() {
        this.timmer = setInterval(() => {
            this.setState((preState, props) => ({
                second: preState.second++,
            }));
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.timmer);
    }

    render(){
        return (<div>
            <p>Second: {this.state.second} s</p>
            <button onClick={this.handleOnClickButton.bind(this)}>
                Status is: {this.state.isOn ? 'ON' : 'OFF'}
            </button>
        </div>);
    }
}

export default Test;
