import React, { useEffect, useState } from 'react';

class NewCountDown extends React.Component {
    state = {
        count: 3,
    };
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1,
            });
            console.log('interval');
        }, 1000);
    }
    componentDidUpdate(preProps, preState) {
        if (this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer);
            }
        }
    }
    render() {
        return <h1>{this.state.count} class</h1>;
    }
}

function CountDown() {
    const [countDown, setCountDown] = useState(3);
    const timeUp = function () {
        alert('Hết giờ');
    };
    useEffect(() => {
        if (countDown === 0) {
            console.log('return');
            timeUp();
            return;
        }
        let timerId = setInterval(() => {
            setCountDown(countDown - 1);
            console.log('setCountDown');
        }, 1000);
        return () => {
            console.log('clear');
            clearTimeout(timerId);
        };
    }, [countDown]);
    return (
        <h2>
            {countDown}
            {console.log('mount')}
        </h2>
    );
}
export { CountDown, NewCountDown };
