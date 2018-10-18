import CHANGE_BUTTON_STATE from './actionTypes';

const changeButtonState = buttonState => ({
  type: CHANGE_BUTTON_STATE,
  payload: buttonState,
});

export { changeButtonState };
