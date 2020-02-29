export default (state = { loading: false }, action) => {
  switch (action.type) {
    case 'login/setState':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};