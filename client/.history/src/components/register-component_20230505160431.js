import React, { useState } from "react";
import authService from "../services/auth.service";

const RegisterComponent = () => {
  let [username, setUsername] = useState("");
  let [email, setUsername] = useState("");
  let [username, setUsername] = useState("");
  let [username, setUsername] = useState("");


  const handleChangeUsername = () => {};
  const handleChangeEmail = () => {};
  const handleChangePassword = () => {};
  const handleChangeRole = () => {};
  const handleRegister = () => {};
  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            onChange={handleChangeUsername}
            type="text"
            className="form-control"
            name="username"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            onChange={handleChangeEmail}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            onChange={handleChangePassword}
            type="password"
            className="form-control"
            name="password"
            placeholder="Password should at least include 6 digit"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Role: </label>
          <input
            onChange={handleChangeRole}
            type="text"
            className="form-control"
            placeholder="Student or Instructor"
            name="role"
          />
        </div>
        <br />
        <button onClick={handleRegister} className="btn btn-primary">
          <span>Register</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterComponent;
