import { combineReducers } from "redux";
import { ADD_CONTACT, FILTER_CONTACT, REMOVE_CONTACT } from "./clientActions";
// { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
// { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
// { id: "id-3", name: "Eden Clements", number: "645-17-79" },
// { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
const clientsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case REMOVE_CONTACT:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};
const filterReducer = (state = "", action) => {
  switch (action.type) {
    case FILTER_CONTACT:
      return action.payload;

    default:
      return state;
  }
};
const rootReducer = combineReducers({
  contacts: clientsReducer,
  filter: filterReducer
});
export default rootReducer;
