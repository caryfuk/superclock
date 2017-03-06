import React, { Component } from 'react';
import moment from 'moment-timezone';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './TimezoneSelect.css';

class TimezoneSelect extends Component {

  render() {
    const options = [{
            label: 'Your local time',
            value: null
          }].concat(moment.tz.names().map((stringVal) => ({
            label: stringVal,
            value: stringVal
          })));

    return (
      <Select
        className='TimezoneSelect'
        options={options}
        clearable={false}
        placeholder='Your local time'
        onChange={this.props.setTimezone}
        value={this.props.timezone} />
    );
  }
}

export default TimezoneSelect;
