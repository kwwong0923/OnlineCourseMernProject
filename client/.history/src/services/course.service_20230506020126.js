import axios from "axios";
const API_URL = "http://localhost:8080/api/course";

class CourseService
{
    post(title, description, price)
    {
        let token;
        if (localStorage.getItem("user")
        {
            token = JSON.parse(localStorage.getItem("user").token)
        })
    }
}