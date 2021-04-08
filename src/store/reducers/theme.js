import * as ACTION from '../actionType';

const initialState = {
  theme: 'light',
};

function reducer(state = initialState, {type, theme}) {
  switch (type) {
    case ACTION.TOGGLE_THEME:
      return {...state, theme};
    default:
      return state;
  }
}

export default reducer;



