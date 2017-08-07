import { ADD_EVENT } from './../actions/constants';

export default function(state = {}, action) {
  switch(action.type){
    case ADD_EVENT:
      const newState = {...state};
      newState[action.eventData.start] = action.eventData;
      return newState;
    default:
      return state;
  }
}