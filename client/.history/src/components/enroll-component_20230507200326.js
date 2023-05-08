import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../services/course.service";

const EnrollComponent = ({ currentUser, setCurrentUser }) => 
{
  const native = useNavigate();

  return (
    <div style={{ padding : "3rem"}}>
      {!currentUser && (
        <div>
          <p>You need to login first</p>
          <button className="btn btn-primary btn-lg" onClick={}>To Login</button>
        </div>
      )}
    </div>
  );
};

export default EnrollComponent;
