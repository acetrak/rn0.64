import * as ACTION from '../actionType';

const initState = {
  privateContent: [],
};

const home = (state = initState, action) => {
  switch (action.type) {
    case ACTION.PRIVATE_CONTENT:
      return { ...state, privateContent: action.data };
    default:
      return state;
  }
};

export default home;
