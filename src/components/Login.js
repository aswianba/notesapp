import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchUser from "../actions/loginuser";
import history from "../container/history";

const LoginPage = () => {
  const [user, setuser] = useState();
  const [password, setPassword] = useState();
  const userDetails = useSelector((state) => state.loginReducer);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userDetails.error) {
      setError(userDetails.error);
    } else if (userDetails.isLoggedIn) {
      history.push("/notes");
    }
  }, [userDetails]);

  const handleLogin = () => {
    dispatch(fetchUser({ user, password }));
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#f5f5f0",
      }}
    >
      <div
        className="form-group"
        style={{
          position: "absolute",
          top: "30%",
          left: "35%",
          width: "400px",
          borderStyle: "groove",
          backgroundColor: "#ccccff",
          padding: "50px",
          borderRadius: "5%",
        }}
      >
        <div className="form-group">
          <label htmlFor="user">UserName:</label>
          <input
            type="text"
            className="form-control"
            id="user"
            value={user}
            onChange={(e) => setuser(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          style={{ align: "center" }}
          onClick={handleLogin}
        >
          Login
        </button>
        {error && <label style={{ color: "red" }}>{error}</label>}
      </div>
    </div>
  );
};

export default LoginPage;
