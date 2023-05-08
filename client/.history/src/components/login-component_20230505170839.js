import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const LoginComponent = (props) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleEmail = (e) =>
  {
    setEmail(e.target.value);
  }

  const handlePassword = (e) =>
  {
    setPassword(e.target.value);
  }

  const handleLogin = async () =>
  {
    try
    {
        AuthService.login(email, password).
    }
    catch (err)
    {
        console.log();
    }
  }
  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        <div className="form-group">
          <label htmlFor="username">Email: </label>
          <input
            onChange={handleEmail}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            onChange={handPassword}
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />
        <div className="form-group">
          <button onClick={handleLogin} className="btn btn-primary btn-block">
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
