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
            CourseService.getByInstructorId(_id)
            .then((data) =>
            {
              setCourseData(data.data)
            })
            .catch((err) =>
            {
                console.log(err);
            })
        }
        else if (currentUser.user.role == "Student")
        {
            CourseService
                        .getEnrolledCourses(_id)
                        .then((data) =>
                        {
                            setCourseData(data.data);
                        })
                        .catch((err) =>
                        {
                            console.log(err);
                        })
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
      {
        currentUser && courseData && courseData.length != 0 && (
          <div style={{display: "flex", flexWrap: "wrap"}}>
            {
              courseData.map(course => 
                {
                  return <div className=""></div>
                })
            }
          </div>
        )
      }  
    </div>
  );
};

export default CourseComponent;
