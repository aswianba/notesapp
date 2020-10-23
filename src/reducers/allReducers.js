import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import notesList from "./notesReducer";

export const allreducers = combineReducers({
  loginReducer: loginReducer,
  notesList: notesList,
});
