import {
  SIDEBAR_TOGGLE,
} from './types';


//Reducer to change state
export const reducer = (state, action) => {
    switch (action.type) {
      case SIDEBAR_TOGGLE:
        return (state = { ...state, sideBarToggle: action.payload });
      default:
        throw new Error(`Unknown action: ${action.type}`);
    }
};