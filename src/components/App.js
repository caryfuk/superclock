import React, { Component } from 'react';
import Clock from './Clock';
import TimezoneSelect from './TimezoneSelect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timezone: null
    }
    this.setTimezone = this.setTimezone.bind(this);
  }

  setTimezone(timezone) {
    this.setState({
      timezone: timezone.value
    });
  }

  render() {
    return (
      <div className="App">
        <Clock timezone={this.state.timezone} />
        <TimezoneSelect timezone={this.state.timezone} setTimezone={this.setTimezone} />
      </div>
    );
  }
}

export default App;
