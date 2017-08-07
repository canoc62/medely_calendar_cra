import React from 'react';

const Event = (props) => {
  return (
    <div 
      className="event-item" 
      style={
        { height: props.height + 'px',
          top: props.start + 'px'
        }}>
      <span>{props.eventName}</span>
    </div>
  );
}

export default Event;