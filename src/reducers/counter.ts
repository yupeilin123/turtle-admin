interface ActionType {
  type: string,
  payload: any,
}

export default {
  namespace: 'counter',
  state: {
    count: 0,
  },
  setState: (state: object, action: ActionType) => {
    return { ...state, ...action.payload };
  },
};