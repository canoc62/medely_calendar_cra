import React, { Component } from 'react';
import AddEventForm from './../components/AddEventForm';
import { connect } from 'react-redux';
import { addEvent } from './../actions/events';
import { SECONDS_IN_MINUTE, SECONDS_IN_NINE_HOURS} from './../actions/constants';

class AddEventFormContainer extends Component {
  constructor() {
    super();

    this.state = {
      eventName: '',
      startTime: 32400,
      endTime: 32460,
      invalidInput: false
    }

    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    this.handleEventNameChange = this.handleEventNameChange.bind(this);
    this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
    this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
    this.validateEvent = this.validateEvent.bind(this);
    this.displayError = this.displayError.bind(this);
    this.disabledSave = this.disabledSave.bind(this);
  }

  validateEvent() {
    if (this.state.startTime >= this.state.endTime) {
      return false;
    }

    const adjustedStartTime = (this.state.startTime - SECONDS_IN_NINE_HOURS)/SECONDS_IN_MINUTE;
    const adjustedEndTime = (this.state.endTime - SECONDS_IN_NINE_HOURS)/SECONDS_IN_MINUTE;

    if (!this.props.events[adjustedStartTime]) {

      for (let event in this.props.events) {
        const currEvent = this.props.events[event];
        const currEventStartTime = currEvent.start;

        if (adjustedStartTime < currEventStartTime && 
          adjustedEndTime > currEventStartTime) {
          return false;
        }
      }

      return true;
    } else {
      return false;
    }
  }

  handleEventSubmit(e) {
    if (this.validateEvent()) {
      this.props.addEvent(
        this.state.eventName,
        this.state.startTime,
        this.state.endTime
      );
      this.props.close();
    } 
    else {
      this.setState({ invalidInput: true })
    }
  }

  handleEventNameChange(e) {
    this.setState({eventName: e.target.value});
  }

  handleStartTimeChange(time) {
    this.setState({startTime: time});
  }

  handleEndTimeChange(time) {
    this.setState({endTime: time});
  }

  disabledSave() {
    return this.state.eventName === '';
  }

  displayError() {
    if (this.state.invalidInput) {
      return "block";
    }
    return "none";
  }

  render() {
    return (
      <AddEventForm 
        displayError={this.displayError}
        eventName={this.state.eventName}
        handleEventNameChange={this.handleEventNameChange}
        startTime={this.state.startTime}
        handleStartTimeChange={this.handleStartTimeChange}
        endTime={this.state.endTime}
        handleEndTimeChange={this.handleEndTimeChange}
        handleEventSubmit={this.handleEventSubmit}
        close={this.props.close}
        disabledSave={this.disabledSave}
      />
    );
  }
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps, { addEvent })(AddEventFormContainer);