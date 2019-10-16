export default (state = { currentUser: {} }, action) => {
  switch (action.type) {
    case 'user/setState':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};