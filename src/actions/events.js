import {
  ADD_EVENT,
  SECONDS_IN_MINUTE,
  SECONDS_IN_NINE_HOURS } from './constants';

export function addEvent(eventName, start, end) {
  return {
    type: ADD_EVENT,
    eventData: {
      eventName,
      start: (start - SECONDS_IN_NINE_HOURS)/SECONDS_IN_MINUTE,
      end: end - SECONDS_IN_NINE_HOURS,
      duration: (end - start)/SECONDS_IN_MINUTE
    }
  }
}