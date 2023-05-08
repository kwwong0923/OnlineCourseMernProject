import React from "react";
import { useNavigate } from "react-router-dom";

const CourseComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleTakeToLogin = () => {
    navigate("/login");
  };

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You need to login to see the list of courses</p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleTakeToLogin}
          >
            Go To Login
          </button>
        </div>
      )}

      {currentUser && currentUser.user.role == "Instructor" && (
        <div>
            <h1>Welcome to Instructor Page</h1>
        </div>
      )}

{currentUser && currentUser.user.role == "Instructor" && (
        <div>
            <h1>Welcome to Instructor Page</h1>
        </div>
      )}
    </div>
  );
};

export default CourseComponent;
