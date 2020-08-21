import { initState } from '../initState';

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.value,
      };
      case 'SET_USERS':
      return {
        ...state,
        users: action.values,
      };
    default:
      return state
  }
}

export default userReducer;
