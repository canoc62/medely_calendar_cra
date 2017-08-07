import React, { Component } from 'react';
import AddEventForm from './../components/AddEventForm';
import { connect } from 'react-redux';
import { addEvent } from './../actions/events';

class AddEventFormContainer extends Component {
  constructor() {
    super();

    this.state = {
      eventName: '',
      startTime: '',
      endTime: '',
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
    const eventStartTime = parseInt(this.state.startTime);
    const eventEndTime = parseInt(this.state.endTime);

    if (eventStartTime < 0 || eventStartTime >= 720 ||
        eventEndTime <= 0 || eventEndTime > 720 ) {
          return false;
        }
    if (!this.props.events[this.state.startTime]) {

      for (let event in this.props.events) {
        const currEvent = this.props.events[event];
        const currEventStartTime = parseInt(currEvent.start);

        if (eventStartTime < currEventStartTime && eventEndTime > currEventStartTime) {
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

  handleStartTimeChange(e) {
    this.setState({startTime: e.target.value});
  }

  handleEndTimeChange(e) {
    this.setState({endTime: e.target.value});
  }

  disabledSave() {
    return (
      this.state.eventName === '' ||
      this.state.startTime === '' ||
      this.state.endTime === ''
    );
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
