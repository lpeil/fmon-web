const loginAction = (action) => ({ ...action.user });
const logoutAction = () => ({ state: {} });

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return loginAction(action);
    }
    case 'LOGOUT': {
      return logoutAction();
    }
    default: return state;
  }
};

export default userReducer;
