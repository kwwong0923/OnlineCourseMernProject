import React from "react";
import { useNavigate } from "react-router-dom";

const CourseComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  return <div style={{ padding: "3rem" }}>
    { !currentUser && (
        <div>
            <p>You need to login to see the list of courses</p>
            <button onClick={}></button>
        </div>
    )}
  </div>;
};

export default CourseComponent;
