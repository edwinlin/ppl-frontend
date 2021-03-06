const initialState = {
  current_user: {},
  users: [],
  message: "MOD 4 PROJECT LOADED - This message is coming from your global Redux Store"
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return {...state, current_user: action.payload}
    case "LOAD_USERS":
      return {...state, users: action.payload}
    default:
      return state;
  }
}
