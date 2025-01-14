//leave these separate for future developers in case they want to add functionality
import * as types from "../actions/actionTypes.js";

const initialState = {
  instanceInfo: [
    {
      host: "",
      port: "",
      databases: 0,
      instanceId: 1,
      recordKeyspaceHistoryFrequency: 0,
    },
  ],
};

const instanceInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_INSTANCEINFO: {
      const instances = action.payload;
      console.log("payload in instanceInfo", action.payload);
      return {
        ...state,
        instanceInfo: instances,
      };
    }

    default: {
      return state;
    }
  }
};

export default instanceInfo;

// instanceId: 1,
//     host: '',
//     port: 0,
//     numberOfDBs: 0,
