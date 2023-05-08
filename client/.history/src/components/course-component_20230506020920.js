import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const CourseComponent = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleTakeToLogin = () => {
    navigate("/login");
  };

  const [courseData, setCourseData] = useState(null);

  useEffect(() => 
  {
    let _id;
    if (currentUser)
    {
        _id = currentUser.user._id;
        if (currentUser.user.role == "Instructor")
        {
            CourseService.get(_id).then((data) =>
            {
                console.log(data);
            }).
        }
    }
  } , []);
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

      {currentUser && currentUser.user.role == "Student" && (
        <div>
            <h1>Welcome to Student Page</h1>
        </div>
      )}      
    </div>
  );
};

export default CourseComponent;
