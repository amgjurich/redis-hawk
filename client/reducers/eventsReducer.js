//leave these separate for future developers in case they want to add functionality
import * as types from "../actions/actionTypes.js";

const initialState = {
  currDatabase: 0,
  events: [[]],
};

const eventsReducer = (state = initialState, action) => {
  let events;

  switch (action.type) {
    case types.UPDATE_EVENTS: {
      if (!action.payload.currDatabase && !action.payload.currInstance) {
        const allEvents = action.payload.events;
        events = state.events.splice();
        events = allEvents;
      } else {
        const dbIndex = action.payload.currDatabase;
        const newEvents = action.payload.events;

        events = state.events.slice();

        //the events come in from new to old
        for (let i = newEvents.length - 1; i >= 0; i -= 1) {
          events[dbIndex].push(newEvents[i]);
        }
      }
      return {
        ...state,
        events,
      };
    }

    default: {
      return state;
    }
  }
};

export default eventsReducer;
