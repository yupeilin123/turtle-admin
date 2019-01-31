interface ActionType {
  type: string,
  payload: any,
}

export default {
  namespace: 'user',
  state: {
    currentUser: {},
  },
  setState: (state: object, action: ActionType) => {
    return { ...state, ...action.payload };
  },
};