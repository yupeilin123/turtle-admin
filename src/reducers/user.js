export default {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  setState: (state, action) => {
    return { ...state, ...action.payload };
  },
};