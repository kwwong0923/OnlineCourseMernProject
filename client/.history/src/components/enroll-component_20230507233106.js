import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const EnrollComponent = ({ currentUser, setCurrentUser }) => 
{
  const navigate = useNavigate();

  // States
  let [searchInput, setSearchInput] = useState("");
  let [searchResult, setSearchResult] = useState(null);

  const handleTakeToLogin = () => 
  {
    navigate("/login")
  };

  const handleChangeInput = (e) =>
  {
    setSearchInput(e.target.value);
  }

  const handleSearch = () =>
  {
    CourseService.getCourseByName(searchInput).then((data) =>
    {
      console.log(data.data);
      setSearchResult(data.data);
    }).catch(err => 
      {
        console.log(err);
      })
  }

  const handleEnroll = (e) =>
  {
    CourseService.enroll(e.target._id).then(() => 
    {
      window.alert("Register Successfully");
      navigate("/course");
    }).catch((err) => 
    {
      
    })
  }

  return (
    <div style={{ padding : "3rem"}}>
      
      {!currentUser && (
        <div>
          <p>You need to login first</p>
          <button className="btn btn-primary btn-lg" onClick={handleTakeToLogin}>To Login</button>
        </div>
      )}

      {currentUser && currentUser.user.role == "Instructor" && (
        <div>
          <h1>WOnly Student can enroll courses</h1>
        </div>
      )}

      {currentUser && currentUser.user.role == "Student" && (
        <div className="search input-group mb-3">
          <input type="text" className="form-control" onChange={handleChangeInput} placeholder="Search by the key words"/>
          <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
      )}

      {
        currentUser && searchResult && searchResult.length != 0 && (
          <div>
            <p>This is the course fulfills your search</p>
            {searchResult.map((course) =>
            {
              return (
              <div key={course._id} className="card" style={{ width: "30rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Title: {course.title}</h5>
                  <p style={{ margin: "0.5rem 0rem" }} className="card-text">{course.description}</p>
                  <p style={{ margin: "0.5rem 0rem" }}>Amount of Students: {course.students.length}</p>
                  <p style={{ margin: "0.5rem 0rem" }}>Price: {course.price}</p>
                  <p style={{ margin: "0.5rem 0rem" }}>Instructor: {course.instructor.username}</p>
                  <a href="#" id={course._id}className="card-text btn btn-primary" onClick="handleEnroll">Register</a>
                </div>
              </div>
              )
            })}
          </div>
        )
      }
    </div>
  );
};

export default EnrollComponent;
