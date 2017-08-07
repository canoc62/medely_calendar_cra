import React from 'react';
import { FormControl, Button } from 'react-bootstrap';

const AddEventForm = (props) => {
  return (
    <form>
       <p id="add-event-form-error" style={{display: props.displayError()}}>
        Error you already have an event scheduled for that time
      </p>
      <div id="event-form-name-input-container">
        <FormControl
          type="text"
          value={props.eventName}
          placeholder="Event Name"
          onChange={props.handleEventNameChange}
          style={{display: "block", width: '350px', margin: '0 auto'}}
        />
      </div>
      <div id="event-form-time-input-container">
        <FormControl
          type="text"
          value={props.startTime}
          placeholder="Start Time"
          onChange={props.handleStartTimeChange}
          style={{display: "inline-block", width: '160px', marginRight: '28px'}}
        />
        <FormControl
          type="text"
          value={props.endTime}
          placeholder="End Time"
          onChange={props.handleEndTimeChange}
          style={{display: "inline-block", width: '160px'}}
        />
      </div>
      <div id="event-form-button-container">
        <Button 
          onClick={props.close}
          style={{
            background: '#bcc3ca',
            color:' #fff',
            fontWeight: '500',
            width: '100px',
            marginRight: '15px'}}
        >Cancel</Button>
        <Button
          bsStyle="primary"
          style={{fontWeight: '500', width: '100px'}}
          disabled={props.disabledSave()}
          onClick={props.handleEventSubmit}
        >Save</Button>
      </div>
    </form>
  )
}

export default AddEventForm;