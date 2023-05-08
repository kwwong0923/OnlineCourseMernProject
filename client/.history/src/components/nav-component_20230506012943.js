import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const navComponent = ({current, setCurrentUser}) => {
  const handleLogout = () => 
  {
    AuthService.logout(); // to remove the local storage user
    window.alert("Logout successfully");
    setCurrentUser(null);
  }
  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Homepage
                  </Link>
                </li>

                {!currentUser && (<li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>)}
                

                {!currentUser && ()}
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link onClick={handleLogout} className="nav-link" to="/">
                    Logout
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/course">
                    Courses
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/postCourse">
                    Create New Course
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/enroll">
                    Register A Course
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default navComponent;
