import { createStore, combineReducers } from "redux";
import userReducer from "../redux/reducers/userReducers";
import allUsersReducer from "./reducers/allUsersReducer";
// импортируем функцию создания стора
import { configureStore } from '@reduxjs/toolkit'
// экспортируем стор
import reducers from './modal/reducers'

const rootReducer = combineReducers({
  user: userReducer,
  contacts: allUsersReducer,
  showModal: reducers.modalReducer,
}, localStorage.contacts);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store = configureStore({
//   reducer: {
//     query: reducers.cocktailReducer,
//     cocktailsData: reducers.allCocktailsReducer,
//     showModal: reducers.modalReducer,
//   },
// })

export default store;
