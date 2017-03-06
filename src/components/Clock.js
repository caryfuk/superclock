import React, { Component } from 'react';
import moment from 'moment-timezone';
import './Clock.css';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      localTime: moment()
    };
    this.timerID = null; 
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      localTime: moment()
    });
  }

  render() {
    return (
      <div className="Clock">
        <h1>
          {this.props.timezone ? this.state.localTime.tz(this.props.timezone).format('h:mm:ss a') : this.state.localTime.format('h:mm:ss a')}
        </h1>
      </div>
    );
  }
}

export default Clock;
