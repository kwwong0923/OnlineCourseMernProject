import React from "react";
import { useNavigate } from "react-router-dom";

const CourseComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  return <div style={{ padding: "3rem" }}>
    { !currentUser && (
        <div>
            <p></p>
        </div>
    )}
  </div>;
};

export default CourseComponent;
