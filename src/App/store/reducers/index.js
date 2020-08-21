//import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineReducers, createStore } from 'redux';
/* import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'; */
import { initState } from '../initState';
import userReducer from "./userReducer";
import messagesReducer from "./messageReducer";

export default function configureStore(initialState = initState) {
  return createStore(
    combineReducers({
      userReducer,
      messagesReducer
      
    }),
    initialState,
    //composeWithDevTools(applyMiddleware(thunk, logger)),
  );
}
