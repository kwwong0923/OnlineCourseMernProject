import React from "react";
import { useNavigate } from "react-router-dom";

const CourseComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  const 

  return <div style={{ padding: "3rem" }}>
    { !currentUser && (
        <div>
            <p>You need to login to see the list of courses</p>
            <button className=onClick={handleTakeToLogin}>Go To Login</button>
        </div>
    )}
  </div>;
};

export default CourseComponent;
