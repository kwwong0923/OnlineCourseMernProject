import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const LoginComponent = (props) => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        <div className="form-group">
          <label htmlFor="username">Email: </label>
          <input
            onChange={handle}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />
        <div className="form-group">
          <button className="btn btn-primary btn-block">
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
