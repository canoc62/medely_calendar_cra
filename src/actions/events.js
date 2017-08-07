import { ADD_EVENT } from './constants';

export function addEvent(eventName, start, end) {
  return {
    type: ADD_EVENT,
    eventData: {
      eventName,
      start,
      end,
      duration: (parseInt(end) - parseInt(start)).toString()
    }
  }
}