import { initState } from '../initState';

const messagesReducer = (state = initState, action) => {
  switch (action.type) {
      case 'SET_MESSAGES':
      return {
        ...state,
        messages: action.values,
      };
    default:
      return state
  }
}

export default messagesReducer;