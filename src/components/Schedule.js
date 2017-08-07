import React from 'react';
import Event from './Event';

const Schedule = ({events}) => {
  const eventComponents = Object.keys(events).reduce((acc, curr) => {
    const currEvent = events[curr];
    const newEventComponent = (
    <Event 
      eventName={currEvent.eventName}
      start={parseInt(currEvent.start)}
      height={currEvent.duration}
      key={currEvent.eventName+currEvent.start+currEvent.duration}
    />);
    return [...acc, newEventComponent];
  }, []);

  return (
    <div id="events-container">
      {eventComponents}
    </div>
  );
}

export default Schedule;