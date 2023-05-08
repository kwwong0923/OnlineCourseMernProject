import React, { useState } from "react";
import AuthService from "../services/auth.service";

const RegisterComponent = () => {
  // State
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");

  // function of handling event
  const handleUsername = (e) => 
  {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => 
  {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => 
  {
    setPassword(e.target.value);
  };

  const handleChangeRole = (e) => 
  {
    setRole(e.target.value);
  };

  const handleRegister = async () => 
  {
    AuthService.register(username, email, password, role);
  };
  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            onChange={handleUsername}
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
