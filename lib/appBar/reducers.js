import { actionTypes } from "./actions";

const initialState = {
  mobileOpenProp: false,
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_APPDRAWER:
      return {
        ...state,
        ...{ mobileOpenProp: !state.mobileOpenProp }
      };
    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 }
      };

    default:
      return state;
  }
}

export default reducer;
