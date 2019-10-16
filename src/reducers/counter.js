export default (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'counter/setState':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};