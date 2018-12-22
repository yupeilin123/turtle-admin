export default {
  namespace: 'counter',
  state: {
    count: 0,
  },
  setState: (state, action) => {
    return { ...state, ...action.payload };
  },
};