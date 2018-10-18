import {
  CHANGE_BUTTON_STATE,
} from './actionTypes';

const initialState = {
  customButtonValue: 'primary',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BUTTON_STATE:
      return {
        customButtonValue: action.payload.customButtonValue,
      };
    default:
      return state;
  }
};
export default rootReducer;
