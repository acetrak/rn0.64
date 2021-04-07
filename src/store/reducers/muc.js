const muc = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, ...action.songs];
    default:
      return state;
  }
};

export default muc;
