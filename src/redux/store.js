import { createStore, combineReducers } from "redux";
import userReducer from "../redux/reducers/userReducers";
import allUsersReducer from "../redux/reducer/allUsersReducer";

const rootReducer = combineReducers({
  user: userReducer,
  allUsers: allUsersReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
