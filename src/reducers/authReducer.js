const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';
const INITIAL_STATE = {
  isSignIn: null
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case SIGN_IN:
      return { ...state, isSignIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignIn: false, userId: null };
    default:
      return state;
  }
}