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
      setSearchInput(data.data);
    }).catch(err => 
      )
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
    </div>
  );
};

export default EnrollComponent;
