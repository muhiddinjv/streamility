const INITIAL_STATE = { // Capitalized = DO N0T MODIFY THIS!!!
  isSignedIn: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

export default authReducer;
