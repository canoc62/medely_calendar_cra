import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import TimeTable from './../components/TimeTable';
import Schedule from './../components/Schedule';
import AddEventOverlay from './../components/AddEventOverlay';

class Calendar extends Component {
  constructor() {
    super();

    this.state = {
      showAddEventOverlay: false
    }

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showAddEventOverlay: false });
  }

  open() {
    this.setState({ showAddEventOverlay: true });
  }

  render() {
    return (
      <div>
        <div id="schedule-container">
          <Button 
            style={{position: "absolute", float: "right", margin: "-70px 650px"}}
            bsStyle="primary" bsSize="large" 
            onClick={this.open}>New Event</Button>
          <TimeTable />
          <Schedule events={this.props.events}/>
        </div>
        <AddEventOverlay showAddEventOverlay={this.state.showAddEventOverlay} close={this.close}/>
      </div>
    );
  }
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps)(Calendar);
