import { combineReducers } from "redux";
import fetchNotesReducer from "./fetchNotesReducer";
import addNoteReducer from "./addNoteReducer";
import deleteNoteReducer from "./deleteNoteReducer";
import loginReducer from "./loginReducer";

export const allreducers = combineReducers({
  fetchNotesReducer: fetchNotesReducer,
  addNoteReducer: addNoteReducer,
  deleteNoteReducer: deleteNoteReducer,
  loginReducer: loginReducer,
});
