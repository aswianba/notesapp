import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NotesList from "./components/NotesList";
import Notes from "./container/notes";
import LoginPage from "./components/Login";
import { BrowserRouter } from "react-router-dom";
import Route from "react-router-dom/Route";
import { useSelector } from "react-redux";

function App() {
  const userDetails = useSelector((state) => state.loginReducer.isLoggedIn);
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          path="/notes"
          exact
          component={userDetails ? Notes : LoginPage}
        />
        <Route path="/" exact component={LoginPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
