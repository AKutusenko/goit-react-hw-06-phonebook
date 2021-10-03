import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts-reducer";
import { filterReducer } from "./filter/filter-reducer";
// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { combineReducers } from "redux";

// export const store = createStore(rootReducer, composeWithDevTools());
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
