import axios from "axios";
const API_URL = "http://localhost:8080/api/course";

class CourseService
{
    post(title, description, price)
    {
        let token;
        if (localStorage.getItem("user"))
        {
            token = JSON.parse(localStorage.getItem("user").token);
        }
        else
        {
            token = "";
        }
        return axios.post(API_URL, {title, description, price}, {
            headers: 
            {
                Authorization: token,
            }
        });
    }

    get(title,)
}