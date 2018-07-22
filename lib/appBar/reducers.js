import { actionTypes } from "./actions";

const initialState = false;

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_APPDRAWER:
      return !state;

    default:
      return state;
  }
}

export default reducer;
